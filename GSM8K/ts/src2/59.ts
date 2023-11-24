import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/59.json')) {
        console.log("Skipping 59")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('A raspberry bush has {{x1}} clusters of {{x2}} fruit each and {{x3}} individual fruit scattered across the bush. How many raspberries are there total?', [], [{'input': {'x1': 6, 'x2': 20, 'x3': 67}, 'output': 187}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 6, 'x2': 20, 'x3': 67});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 187;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 59,
        "question": 'A raspberry bush has 6 clusters of 20 fruit each and 67 individual fruit scattered across the bush. How many raspberries are there total?',
        "answer": 187,
        "examples": [{'input': {'x1': 6, 'x2': 20, 'x3': 67}, 'output': 187}],
        });
    fs.writeFileSync('json2/59.json', json);
}
doit();
