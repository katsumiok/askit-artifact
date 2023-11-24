import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1145.json')) {
        console.log("Skipping 1145")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Faraday owns a flower shop. He sells a sunflower that costs $2 each and a bouquet of sunflower that costs $8. If Faraday earned $26 from the sunflower and $56 from the bouquet per day, and if each bouquet has {{x1}} sunflowers, how many sunflowers was Faraday able to sell after {{x2}} days?', [], [{'input': {'x1': 12, 'x2': 3}, 'output': 291}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 12, 'x2': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 291;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1145,
        "question": 'Faraday owns a flower shop. He sells a sunflower that costs $2 each and a bouquet of sunflower that costs $8. If Faraday earned $26 from the sunflower and $56 from the bouquet per day, and if each bouquet has 12 sunflowers, how many sunflowers was Faraday able to sell after 3 days?',
        "answer": 291,
        "examples": [{'input': {'x1': 12, 'x2': 3}, 'output': 291}],
        });
    fs.writeFileSync('json/1145.json', json);
}
doit();
