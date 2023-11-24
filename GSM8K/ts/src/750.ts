import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/750.json')) {
        console.log("Skipping 750")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Candy has a chair rental business. During the weekdays, {{x1}} chairs are rented each day; but during weekends, {{x2}} chairs are rented each day. If this continues, how many chairs in total will Candy be able to rent out in two 4-week months?', [], [{'input': {'x1': 60, 'x2': 100}, 'output': 4000}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 60, 'x2': 100});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 4000;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 750,
        "question": 'Candy has a chair rental business. During the weekdays, 60 chairs are rented each day; but during weekends, 100 chairs are rented each day. If this continues, how many chairs in total will Candy be able to rent out in two 4-week months?',
        "answer": 4000,
        "examples": [{'input': {'x1': 60, 'x2': 100}, 'output': 4000}],
        });
    fs.writeFileSync('json/750.json', json);
}
doit();
