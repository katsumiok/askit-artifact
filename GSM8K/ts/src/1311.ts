import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1311.json')) {
        console.log("Skipping 1311")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('The caretaker of the docks needs to buy some new line. He wants {{x1}} feet of line for every foot of dock. Right now, there is {{x2}} feet of dock, and he has {{x3}} feet of new line. How many feet of line does he need to buy in total?', [], [{'input': {'x1': 3, 'x2': 200, 'x3': 6}, 'output': 594}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3, 'x2': 200, 'x3': 6});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 594;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1311,
        "question": 'The caretaker of the docks needs to buy some new line. He wants 3 feet of line for every foot of dock. Right now, there is 200 feet of dock, and he has 6 feet of new line. How many feet of line does he need to buy in total?',
        "answer": 594,
        "examples": [{'input': {'x1': 3, 'x2': 200, 'x3': 6}, 'output': 594}],
        });
    fs.writeFileSync('json/1311.json', json);
}
doit();
