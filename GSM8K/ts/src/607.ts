import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/607.json')) {
        console.log("Skipping 607")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('The jumbo bottle of shampoo costs $24.00.  The directions say to use {{x1}} pumps of shampoo and this will give you {{x2}} washings.  If Jackie only uses {{x3}} pump per wash, how much will each pump cost, in cents?', [], [{'input': {'x1': 2, 'x2': 120, 'x3': 1}, 'output': 10}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2, 'x2': 120, 'x3': 1});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 10;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 607,
        "question": 'The jumbo bottle of shampoo costs $24.00.  The directions say to use 2 pumps of shampoo and this will give you 120 washings.  If Jackie only uses 1 pump per wash, how much will each pump cost, in cents?',
        "answer": 10,
        "examples": [{'input': {'x1': 2, 'x2': 120, 'x3': 1}, 'output': 10}],
        });
    fs.writeFileSync('json/607.json', json);
}
doit();
