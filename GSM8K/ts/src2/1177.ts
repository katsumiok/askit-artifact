import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1177.json')) {
        console.log("Skipping 1177")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>("Miss Albert's class is composed of {{x1}} boys and {{x2}} girls. One-third of the girls and one-fourth of the boys are on varsity. How many students are not on varsity?", [], [{'input': {'x1': 12, 'x2': 12}, 'output': 17}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 12, 'x2': 12});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 17;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1177,
        "question": "Miss Albert's class is composed of 12 boys and 12 girls. One-third of the girls and one-fourth of the boys are on varsity. How many students are not on varsity?",
        "answer": 17,
        "examples": [{'input': {'x1': 12, 'x2': 12}, 'output': 17}],
        });
    fs.writeFileSync('json2/1177.json', json);
}
doit();
