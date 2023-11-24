import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/344.json')) {
        console.log("Skipping 344")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('At a restaurant, Juice Box A is {{x1}} dollars. Juice Box B is {{x2}} dollars more than Juice Box A. Juice Box C is {{x3}} dollars more than Juice Box A. How much more is Juice box C than Juice Box B?', [], [{'input': {'x1': 4, 'x2': 5, 'x3': 7}, 'output': 2}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4, 'x2': 5, 'x3': 7});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 2;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 344,
        "question": 'At a restaurant, Juice Box A is 4 dollars. Juice Box B is 5 dollars more than Juice Box A. Juice Box C is 7 dollars more than Juice Box A. How much more is Juice box C than Juice Box B?',
        "answer": 2,
        "examples": [{'input': {'x1': 4, 'x2': 5, 'x3': 7}, 'output': 2}],
        });
    fs.writeFileSync('json/344.json', json);
}
doit();
