import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1025.json')) {
        console.log("Skipping 1025")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('The Easter egg hunt team hid {{x1}} eggs. The Smith twins each found {{x2}} eggs. All the other eggs except {{x3}} were found by their friends. How many eggs did the friends find?', [], [{'input': {'x1': 100, 'x2': 30, 'x3': 10}, 'output': 30}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 100, 'x2': 30, 'x3': 10});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 30;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1025,
        "question": 'The Easter egg hunt team hid 100 eggs. The Smith twins each found 30 eggs. All the other eggs except 10 were found by their friends. How many eggs did the friends find?',
        "answer": 30,
        "examples": [{'input': {'x1': 100, 'x2': 30, 'x3': 10}, 'output': 30}],
        });
    fs.writeFileSync('json2/1025.json', json);
}
doit();
