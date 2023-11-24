import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/688.json')) {
        console.log("Skipping 688")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('John is very tired. He decides to take a nap, but he wants to finish his homework first. If John has {{x1}} minutes of math homework, {{x2}} minutes of reading homework, and {{x3}} minutes of history homework and {{x4}} hours before he has to eat dinner, how many minutes does John have to nap?', [], [{'input': {'x1': 20, 'x2': 40, 'x3': 20, 'x4': 3}, 'output': 100}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 20, 'x2': 40, 'x3': 20, 'x4': 3});
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
        "id": 688,
        "question": 'John is very tired. He decides to take a nap, but he wants to finish his homework first. If John has 20 minutes of math homework, 40 minutes of reading homework, and 20 minutes of history homework and 3 hours before he has to eat dinner, how many minutes does John have to nap?',
        "answer": 100,
        "examples": [{'input': {'x1': 20, 'x2': 40, 'x3': 20, 'x4': 3}, 'output': 100}],
        });
    fs.writeFileSync('json2/688.json', json);
}
doit();
