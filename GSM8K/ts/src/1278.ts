import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1278.json')) {
        console.log("Skipping 1278")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Tom found {{x1}} seashells, Nancy found {{x2}} seashells, and Benny found {{x3}} seashells on the beach. When they cleaned them, they discovered that {{x4}} were cracked. How many good seashells did they find together?', [], [{'input': {'x1': 214, 'x2': 432, 'x3': 86, 'x4': 67}, 'output': 665}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 214, 'x2': 432, 'x3': 86, 'x4': 67});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 665;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1278,
        "question": 'Tom found 214 seashells, Nancy found 432 seashells, and Benny found 86 seashells on the beach. When they cleaned them, they discovered that 67 were cracked. How many good seashells did they find together?',
        "answer": 665,
        "examples": [{'input': {'x1': 214, 'x2': 432, 'x3': 86, 'x4': 67}, 'output': 665}],
        });
    fs.writeFileSync('json/1278.json', json);
}
doit();
