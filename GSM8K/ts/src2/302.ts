import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/302.json')) {
        console.log("Skipping 302")
        return;
    }
    // measure time
    const f = define<number, {}>('Annika brought $50 to the town fair. She spent half of it on food and snacks, and an additional $10 for rides. How much, in dollars, is left?', [], [{'input': {}, 'output': 15}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 15;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 302,
        "question": 'Annika brought $50 to the town fair. She spent half of it on food and snacks, and an additional $10 for rides. How much, in dollars, is left?',
        "answer": 15,
        "examples": [{'input': {}, 'output': 15}],
        });
    fs.writeFileSync('json2/302.json', json);
}
doit();
