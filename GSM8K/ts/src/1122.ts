import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1122.json')) {
        console.log("Skipping 1122")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number, x6: number, x7: number}>('A toy manufacturer receives an order for {{x1}} toys. {{x2}} workers are available to work on the order. {{x3}} of the workers produce {{x4}} toys an hour, and another {{x5}} workers produce {{x6}} toys an hour. They all work on the order during their 10-hour shift, and by the end of their shift the manufacturer still needs another {{x7}} toys to be able to ship the order. How many toys per hour does the fifth worker produce?', [], [{'input': {'x1': 400, 'x2': 5, 'x3': 2, 'x4': 6, 'x5': 2, 'x6': 4, 'x7': 20}, 'output': 18}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 400, 'x2': 5, 'x3': 2, 'x4': 6, 'x5': 2, 'x6': 4, 'x7': 20});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 18;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1122,
        "question": 'A toy manufacturer receives an order for 400 toys. 5 workers are available to work on the order. 2 of the workers produce 6 toys an hour, and another 2 workers produce 4 toys an hour. They all work on the order during their 10-hour shift, and by the end of their shift the manufacturer still needs another 20 toys to be able to ship the order. How many toys per hour does the fifth worker produce?',
        "answer": 18,
        "examples": [{'input': {'x1': 400, 'x2': 5, 'x3': 2, 'x4': 6, 'x5': 2, 'x6': 4, 'x7': 20}, 'output': 18}],
        });
    fs.writeFileSync('json/1122.json', json);
}
doit();
