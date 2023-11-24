import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1314.json')) {
        console.log("Skipping 1314")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>("John had a son James when he was 19.  James is now twice as old as his sister Dora, who will turn {{x1}} in {{x2}} years.  How old will John's youngest son, who was born when John was 32, be in {{x3}} years?", [], [{'input': {'x1': 12, 'x2': 3, 'x3': 3}, 'output': 8}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 12, 'x2': 3, 'x3': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 8;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1314,
        "question": "John had a son James when he was 19.  James is now twice as old as his sister Dora, who will turn 12 in 3 years.  How old will John's youngest son, who was born when John was 32, be in 3 years?",
        "answer": 8,
        "examples": [{'input': {'x1': 12, 'x2': 3, 'x3': 3}, 'output': 8}],
        });
    fs.writeFileSync('json/1314.json', json);
}
doit();
