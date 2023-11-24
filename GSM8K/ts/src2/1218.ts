import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1218.json')) {
        console.log("Skipping 1218")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number, x6: number}>('Cedar Falls Middle School has students in grades {{x1}} – {{x2}} and each year they are challenged to earn as many Accelerated Reader points as they can. The {{x3}} students in each grade with the most points get to try an escape room set up by the teachers. Only {{x4}} students can try the escape room at a time. They have {{x5}} minutes to try and escape. If every group uses their full {{x6}} minutes, how long will it take for everyone to try the escape room?', [], [{'input': {'x1': 4, 'x2': 7, 'x3': 10, 'x4': 8, 'x5': 45, 'x6': 45}, 'output': 225}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4, 'x2': 7, 'x3': 10, 'x4': 8, 'x5': 45, 'x6': 45});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 225;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1218,
        "question": 'Cedar Falls Middle School has students in grades 4 – 7 and each year they are challenged to earn as many Accelerated Reader points as they can. The 10 students in each grade with the most points get to try an escape room set up by the teachers. Only 8 students can try the escape room at a time. They have 45 minutes to try and escape. If every group uses their full 45 minutes, how long will it take for everyone to try the escape room?',
        "answer": 225,
        "examples": [{'input': {'x1': 4, 'x2': 7, 'x3': 10, 'x4': 8, 'x5': 45, 'x6': 45}, 'output': 225}],
        });
    fs.writeFileSync('json2/1218.json', json);
}
doit();
