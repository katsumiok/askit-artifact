import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/846.json')) {
        console.log("Skipping 846")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Vicki is planning a pop concert at her high school. The show will be {{x1}} hours. She is allowing each group {{x2}} minutes to get on stage, {{x3}} minutes to perform, and then {{x4}} minutes to exit the stage. If she allows a 10-minute intermission, how many groups can perform in the concert?', [], [{'input': {'x1': 2, 'x2': 2, 'x3': 6, 'x4': 2}, 'output': 11}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2, 'x2': 2, 'x3': 6, 'x4': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 11;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 846,
        "question": 'Vicki is planning a pop concert at her high school. The show will be 2 hours. She is allowing each group 2 minutes to get on stage, 6 minutes to perform, and then 2 minutes to exit the stage. If she allows a 10-minute intermission, how many groups can perform in the concert?',
        "answer": 11,
        "examples": [{'input': {'x1': 2, 'x2': 2, 'x3': 6, 'x4': 2}, 'output': 11}],
        });
    fs.writeFileSync('json/846.json', json);
}
doit();
