import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/733.json')) {
        console.log("Skipping 733")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('While walking down the street with his {{x1}} younger siblings, Greg found $20. To be fair to his siblings, he decided to split the money equally. How much money did each of them get?', [], [{'input': {'x1': 3}, 'output': 5}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 5;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 733,
        "question": 'While walking down the street with his 3 younger siblings, Greg found $20. To be fair to his siblings, he decided to split the money equally. How much money did each of them get?',
        "answer": 5,
        "examples": [{'input': {'x1': 3}, 'output': 5}],
        });
    fs.writeFileSync('json2/733.json', json);
}
doit();
