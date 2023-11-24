import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/544.json')) {
        console.log("Skipping 544")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Jeff and Brad are trying to divide {{x1}} dollars between them. Jeff gets {{x2}} times as much as Brad. How much does Jeff get in dollars?', [], [{'input': {'x1': 100, 'x2': 4}, 'output': 80}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 100, 'x2': 4});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 80;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 544,
        "question": 'Jeff and Brad are trying to divide 100 dollars between them. Jeff gets 4 times as much as Brad. How much does Jeff get in dollars?',
        "answer": 80,
        "examples": [{'input': {'x1': 100, 'x2': 4}, 'output': 80}],
        });
    fs.writeFileSync('json/544.json', json);
}
doit();
