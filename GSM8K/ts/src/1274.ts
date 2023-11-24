import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1274.json')) {
        console.log("Skipping 1274")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('A family of parents and a child go to the cinema. The cost of an adult ticket is $12 and a child ticket is $8. Then they buy {{x1}} popcorns for $3 each. How many dollars do they pay in total?', [], [{'input': {'x1': 2}, 'output': 38}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2});
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
        "id": 1274,
        "question": 'A family of parents and a child go to the cinema. The cost of an adult ticket is $12 and a child ticket is $8. Then they buy 2 popcorns for $3 each. How many dollars do they pay in total?',
        "answer": 38,
        "examples": [{'input': {'x1': 2}, 'output': 38}],
        });
    fs.writeFileSync('json/1274.json', json);
}
doit();
