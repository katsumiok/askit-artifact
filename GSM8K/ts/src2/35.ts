import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/35.json')) {
        console.log("Skipping 35")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Mike plays ping pong for {{x1}} minutes.  In the first {{x2}} minutes, he scores {{x3}} points.  In the second {{x4}} minutes, he scores 25% more points.  How many total points did he score?', [], [{'input': {'x1': 40, 'x2': 20, 'x3': 4, 'x4': 20}, 'output': 9}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 40, 'x2': 20, 'x3': 4, 'x4': 20});
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
        "id": 35,
        "question": 'Mike plays ping pong for 40 minutes.  In the first 20 minutes, he scores 4 points.  In the second 20 minutes, he scores 25% more points.  How many total points did he score?',
        "answer": 9,
        "examples": [{'input': {'x1': 40, 'x2': 20, 'x3': 4, 'x4': 20}, 'output': 9}],
        });
    fs.writeFileSync('json2/35.json', json);
}
doit();
