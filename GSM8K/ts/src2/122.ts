import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/122.json')) {
        console.log("Skipping 122")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Sadie slept {{x1}} hours on Monday. For the next two days, she slept {{x2}} hours less, each, because she had to complete some assignments. If the rest of the week she slept {{x3}} hour more than those two days, how many hours did she sleep in total throughout the week?', [], [{'input': {'x1': 8, 'x2': 2, 'x3': 1}, 'output': 48}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 8, 'x2': 2, 'x3': 1});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 48;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 122,
        "question": 'Sadie slept 8 hours on Monday. For the next two days, she slept 2 hours less, each, because she had to complete some assignments. If the rest of the week she slept 1 hour more than those two days, how many hours did she sleep in total throughout the week?',
        "answer": 48,
        "examples": [{'input': {'x1': 8, 'x2': 2, 'x3': 1}, 'output': 48}],
        });
    fs.writeFileSync('json2/122.json', json);
}
doit();
