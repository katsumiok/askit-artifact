import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1050.json')) {
        console.log("Skipping 1050")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('It is approximately {{x1}} kilometers from San Diego, California to New York City, New York. If Bernice drove {{x2}} kilometers for {{x3}} days, how many kilometers will she still need to drive?', [], [{'input': {'x1': 1955, 'x2': 325, 'x3': 4}, 'output': 655}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 1955, 'x2': 325, 'x3': 4});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 655;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1050,
        "question": 'It is approximately 1955 kilometers from San Diego, California to New York City, New York. If Bernice drove 325 kilometers for 4 days, how many kilometers will she still need to drive?',
        "answer": 655,
        "examples": [{'input': {'x1': 1955, 'x2': 325, 'x3': 4}, 'output': 655}],
        });
    fs.writeFileSync('json/1050.json', json);
}
doit();
