import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/791.json')) {
        console.log("Skipping 791")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('A train has {{x1}} people traveling on it. At the first stop {{x2}} people get off and {{x3}} more people get on, and at the next stop another {{x4}} people get off. How many people are on the train?', [], [{'input': {'x1': 172, 'x2': 47, 'x3': 13, 'x4': 38}, 'output': 100}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 172, 'x2': 47, 'x3': 13, 'x4': 38});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 100;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 791,
        "question": 'A train has 172 people traveling on it. At the first stop 47 people get off and 13 more people get on, and at the next stop another 38 people get off. How many people are on the train?',
        "answer": 100,
        "examples": [{'input': {'x1': 172, 'x2': 47, 'x3': 13, 'x4': 38}, 'output': 100}],
        });
    fs.writeFileSync('json/791.json', json);
}
doit();
