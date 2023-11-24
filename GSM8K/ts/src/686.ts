import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/686.json')) {
        console.log("Skipping 686")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Greta and Celinda are baking cookies. Greta bakes {{x1}} cookies and Celinda bakes twice as many. If the pair eat {{x2}} of the cookies while they are cooling and put the rest in a box, how many cookies are there in the box?', [], [{'input': {'x1': 30, 'x2': 10}, 'output': 80}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 30, 'x2': 10});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 80;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 686,
        "question": 'Greta and Celinda are baking cookies. Greta bakes 30 cookies and Celinda bakes twice as many. If the pair eat 10 of the cookies while they are cooling and put the rest in a box, how many cookies are there in the box?',
        "answer": 80,
        "examples": [{'input': {'x1': 30, 'x2': 10}, 'output': 80}],
        });
    fs.writeFileSync('json/686.json', json);
}
doit();
