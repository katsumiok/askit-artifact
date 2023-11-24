import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1197.json')) {
        console.log("Skipping 1197")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('John buys {{x1}} bottles of scotch for a total cost of $600.  He also buys twice as many bottles of cognac that cost 50% more per bottle.  How much does he spend on everything?', [], [{'input': {'x1': 10}, 'output': 2400}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 10});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 2400;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1197,
        "question": 'John buys 10 bottles of scotch for a total cost of $600.  He also buys twice as many bottles of cognac that cost 50% more per bottle.  How much does he spend on everything?',
        "answer": 2400,
        "examples": [{'input': {'x1': 10}, 'output': 2400}],
        });
    fs.writeFileSync('json/1197.json', json);
}
doit();
