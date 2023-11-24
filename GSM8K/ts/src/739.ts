import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/739.json')) {
        console.log("Skipping 739")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Cecelia went to the milk store and found out that a gallon jar costs $2 more than a half-gallon jar. If a gallon jar costs $5, calculate the total amount of money she spent on 10-gallon jars and {{x1}} half-gallon jars.', [], [{'input': {'x1': 16}, 'output': 98}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 16});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 98;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 739,
        "question": 'Cecelia went to the milk store and found out that a gallon jar costs $2 more than a half-gallon jar. If a gallon jar costs $5, calculate the total amount of money she spent on 10-gallon jars and 16 half-gallon jars.',
        "answer": 98,
        "examples": [{'input': {'x1': 16}, 'output': 98}],
        });
    fs.writeFileSync('json/739.json', json);
}
doit();
