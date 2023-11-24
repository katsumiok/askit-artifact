import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/234.json')) {
        console.log("Skipping 234")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Steve decides to start eating more tomatoes and decides to grows his own cherry tomatoes.  He eats twice as much as his girlfriend.  He eats {{x1}} per day.  If a vine can produce {{x2}} tomatoes per week how many vines does he need?', [], [{'input': {'x1': 6, 'x2': 3}, 'output': 21}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 6, 'x2': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 21;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 234,
        "question": 'Steve decides to start eating more tomatoes and decides to grows his own cherry tomatoes.  He eats twice as much as his girlfriend.  He eats 6 per day.  If a vine can produce 3 tomatoes per week how many vines does he need?',
        "answer": 21,
        "examples": [{'input': {'x1': 6, 'x2': 3}, 'output': 21}],
        });
    fs.writeFileSync('json/234.json', json);
}
doit();
