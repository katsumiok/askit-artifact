import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/628.json')) {
        console.log("Skipping 628")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Adam really wants to ride the biggest roller coaster at the park. You have to be {{x1}} feet tall to ride it. Adam’s height is {{x2}} inches and he grows {{x3}} inches a year. How many years until he is tall enough to ride it?', [], [{'input': {'x1': 4, 'x2': 40, 'x3': 2}, 'output': 4}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4, 'x2': 40, 'x3': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 4;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 628,
        "question": 'Adam really wants to ride the biggest roller coaster at the park. You have to be 4 feet tall to ride it. Adam’s height is 40 inches and he grows 2 inches a year. How many years until he is tall enough to ride it?',
        "answer": 4,
        "examples": [{'input': {'x1': 4, 'x2': 40, 'x3': 2}, 'output': 4}],
        });
    fs.writeFileSync('json/628.json', json);
}
doit();
