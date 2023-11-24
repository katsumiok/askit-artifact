import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/219.json')) {
        console.log("Skipping 219")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Four students scored a total of {{x1}} points in a board game. Naomi scored {{x2}} of the points. Yuri scored {{x3}} more than half as many points as Naomi and Brianna scored {{x4}} points more than Naomi. How many points did Jojo score?', [], [{'input': {'x1': 251, 'x2': 68, 'x3': 10, 'x4': 17}, 'output': 54}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 251, 'x2': 68, 'x3': 10, 'x4': 17});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 54;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 219,
        "question": 'Four students scored a total of 251 points in a board game. Naomi scored 68 of the points. Yuri scored 10 more than half as many points as Naomi and Brianna scored 17 points more than Naomi. How many points did Jojo score?',
        "answer": 54,
        "examples": [{'input': {'x1': 251, 'x2': 68, 'x3': 10, 'x4': 17}, 'output': 54}],
        });
    fs.writeFileSync('json/219.json', json);
}
doit();
