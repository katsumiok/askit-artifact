import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/103.json')) {
        console.log("Skipping 103")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('A fog bank rolls in from the ocean to cover a city. It takes {{x1}} minutes to cover every {{x2}} miles of the city. If the city is {{x3}} miles across from the oceanfront to the opposite inland edge, how many minutes will it take for the fog bank to cover the whole city?', [], [{'input': {'x1': 10, 'x2': 3, 'x3': 42}, 'output': 140}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 10, 'x2': 3, 'x3': 42});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 140;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 103,
        "question": 'A fog bank rolls in from the ocean to cover a city. It takes 10 minutes to cover every 3 miles of the city. If the city is 42 miles across from the oceanfront to the opposite inland edge, how many minutes will it take for the fog bank to cover the whole city?',
        "answer": 140,
        "examples": [{'input': {'x1': 10, 'x2': 3, 'x3': 42}, 'output': 140}],
        });
    fs.writeFileSync('json2/103.json', json);
}
doit();
