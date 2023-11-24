import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/496.json')) {
        console.log("Skipping 496")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Brett is {{x1}} years old. In four years his sister Angela will be three times as old as he is now. How old is Angela right now?', [], [{'input': {'x1': 14}, 'output': 38}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 14});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 38;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 496,
        "question": 'Brett is 14 years old. In four years his sister Angela will be three times as old as he is now. How old is Angela right now?',
        "answer": 38,
        "examples": [{'input': {'x1': 14}, 'output': 38}],
        });
    fs.writeFileSync('json2/496.json', json);
}
doit();
