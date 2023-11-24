import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/461.json')) {
        console.log("Skipping 461")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Shondra has {{x1}} fewer plants than Toni. Toni has 60% more plants than Frederick. If Frederick has {{x2}} plants, how many plants does Shondra have?', [], [{'input': {'x1': 7, 'x2': 10}, 'output': 9}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 7, 'x2': 10});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 9;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 461,
        "question": 'Shondra has 7 fewer plants than Toni. Toni has 60% more plants than Frederick. If Frederick has 10 plants, how many plants does Shondra have?',
        "answer": 9,
        "examples": [{'input': {'x1': 7, 'x2': 10}, 'output': 9}],
        });
    fs.writeFileSync('json2/461.json', json);
}
doit();
