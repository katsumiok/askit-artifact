import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/776.json')) {
        console.log("Skipping 776")
        return;
    }
    // measure time
    const f = define<number, {}>('The price of a laptop is $1000. If you get a 20% discount, how much do you have to pay?', [], [{'input': {}, 'output': 800}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 800;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 776,
        "question": 'The price of a laptop is $1000. If you get a 20% discount, how much do you have to pay?',
        "answer": 800,
        "examples": [{'input': {}, 'output': 800}],
        });
    fs.writeFileSync('json2/776.json', json);
}
doit();
