import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/528.json')) {
        console.log("Skipping 528")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Ophelia and Jenna are living in the same apartment building. They each have {{x1}} fewer sofas than chairs. Jenna has {{x2}} times as many chairs as Ophelia. If Ophelia has {{x3}} sofas, calculate the total number of sofas and chairs that they have.', [], [{'input': {'x1': 2, 'x2': 3, 'x3': 20}, 'output': 172}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2, 'x2': 3, 'x3': 20});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 172;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 528,
        "question": 'Ophelia and Jenna are living in the same apartment building. They each have 2 fewer sofas than chairs. Jenna has 3 times as many chairs as Ophelia. If Ophelia has 20 sofas, calculate the total number of sofas and chairs that they have.',
        "answer": 172,
        "examples": [{'input': {'x1': 2, 'x2': 3, 'x3': 20}, 'output': 172}],
        });
    fs.writeFileSync('json/528.json', json);
}
doit();
