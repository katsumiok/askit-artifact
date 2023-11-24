import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1098.json')) {
        console.log("Skipping 1098")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Jeff is {{x1}} years older than his younger sister, Martha. Martha, on the other hand, is {{x2}} years younger than her boyfriend, Mike. If Mike is {{x3}} years old, how old is Jeff?', [], [{'input': {'x1': 10, 'x2': 4, 'x3': 24}, 'output': 30}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 10, 'x2': 4, 'x3': 24});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 30;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1098,
        "question": 'Jeff is 10 years older than his younger sister, Martha. Martha, on the other hand, is 4 years younger than her boyfriend, Mike. If Mike is 24 years old, how old is Jeff?',
        "answer": 30,
        "examples": [{'input': {'x1': 10, 'x2': 4, 'x3': 24}, 'output': 30}],
        });
    fs.writeFileSync('json/1098.json', json);
}
doit();
