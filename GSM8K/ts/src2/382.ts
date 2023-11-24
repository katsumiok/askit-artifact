import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/382.json')) {
        console.log("Skipping 382")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>("Axel has {{x1}} silver pesos and {{x2}} gold pesos. He visits her friend Anna who has twice as many silver pesos as he has and {{x3}} more gold pesos. What's the total number of pesos they have together?", [], [{'input': {'x1': 50, 'x2': 80, 'x3': 40}, 'output': 350}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 50, 'x2': 80, 'x3': 40});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 350;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 382,
        "question": "Axel has 50 silver pesos and 80 gold pesos. He visits her friend Anna who has twice as many silver pesos as he has and 40 more gold pesos. What's the total number of pesos they have together?",
        "answer": 350,
        "examples": [{'input': {'x1': 50, 'x2': 80, 'x3': 40}, 'output': 350}],
        });
    fs.writeFileSync('json2/382.json', json);
}
doit();
