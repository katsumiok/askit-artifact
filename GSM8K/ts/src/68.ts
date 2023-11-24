import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/68.json')) {
        console.log("Skipping 68")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>("There are twice as many boys as girls at Dr. Wertz's school. If there are {{x1}} girls and {{x2}} students to every teacher, how many teachers are there?", [], [{'input': {'x1': 60, 'x2': 5}, 'output': 36}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 60, 'x2': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 36;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 68,
        "question": "There are twice as many boys as girls at Dr. Wertz's school. If there are 60 girls and 5 students to every teacher, how many teachers are there?",
        "answer": 36,
        "examples": [{'input': {'x1': 60, 'x2': 5}, 'output': 36}],
        });
    fs.writeFileSync('json/68.json', json);
}
doit();
