import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/723.json')) {
        console.log("Skipping 723")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('The restaurant has {{x1}} normal chairs and {{x2}} chairs for babies. If {{x3}} of the normal chairs and {{x4}} of the baby chairs were sent to the carpenter for repair, how many chairs does the restaurant have left?', [], [{'input': {'x1': 170, 'x2': 23, 'x3': 20, 'x4': 13}, 'output': 160}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 170, 'x2': 23, 'x3': 20, 'x4': 13});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 160;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 723,
        "question": 'The restaurant has 170 normal chairs and 23 chairs for babies. If 20 of the normal chairs and 13 of the baby chairs were sent to the carpenter for repair, how many chairs does the restaurant have left?',
        "answer": 160,
        "examples": [{'input': {'x1': 170, 'x2': 23, 'x3': 20, 'x4': 13}, 'output': 160}],
        });
    fs.writeFileSync('json/723.json', json);
}
doit();
