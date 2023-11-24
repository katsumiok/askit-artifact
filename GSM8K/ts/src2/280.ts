import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/280.json')) {
        console.log("Skipping 280")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Peter purchased {{x1}} popsicles at $0.25 each. He also purchased {{x2}} ice cream bars at $0.50 each. How much did he pay in total in dollars?', [], [{'input': {'x1': 20, 'x2': 4}, 'output': 7}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 20, 'x2': 4});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 7;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 280,
        "question": 'Peter purchased 20 popsicles at $0.25 each. He also purchased 4 ice cream bars at $0.50 each. How much did he pay in total in dollars?',
        "answer": 7,
        "examples": [{'input': {'x1': 20, 'x2': 4}, 'output': 7}],
        });
    fs.writeFileSync('json2/280.json', json);
}
doit();
