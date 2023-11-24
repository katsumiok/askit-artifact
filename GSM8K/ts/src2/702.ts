import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/702.json')) {
        console.log("Skipping 702")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>("Gissela, Gordy, and Gary are truck drivers.  Gissela has a truck large enough to haul 4,000 pounds of gravel. Gordy's truck can haul {{x1}} pounds more than Gissela's truck.  And when Gary brings his truck and joins Gissela and Gordy, the three trucks combined can haul a total of 11,600 pounds of gravel. How many pounds of gravel can Gary's truck carry?", [], [{'input': {'x1': 800}, 'output': 2800}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 800});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 2800;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 702,
        "question": "Gissela, Gordy, and Gary are truck drivers.  Gissela has a truck large enough to haul 4,000 pounds of gravel. Gordy's truck can haul 800 pounds more than Gissela's truck.  And when Gary brings his truck and joins Gissela and Gordy, the three trucks combined can haul a total of 11,600 pounds of gravel. How many pounds of gravel can Gary's truck carry?",
        "answer": 2800,
        "examples": [{'input': {'x1': 800}, 'output': 2800}],
        });
    fs.writeFileSync('json2/702.json', json);
}
doit();
