import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/100.json')) {
        console.log("Skipping 100")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>("Jerome had {{x1}} friends who came to visit him on a certain day. The first friend pressed on the doorbell {{x2}} times before Jerome opened, the second friend pressed on the doorbell 1/4 times more than Jerome's first friend. The third friend pressed on the doorbell {{x3}} times more than the fourth friend. If the fourth friend pressed on the doorbell {{x4}} times, how many doorbell rings did the doorbell make?", [], [{'input': {'x1': 4, 'x2': 20, 'x3': 10, 'x4': 60}, 'output': 175}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4, 'x2': 20, 'x3': 10, 'x4': 60});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 175;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 100,
        "question": "Jerome had 4 friends who came to visit him on a certain day. The first friend pressed on the doorbell 20 times before Jerome opened, the second friend pressed on the doorbell 1/4 times more than Jerome's first friend. The third friend pressed on the doorbell 10 times more than the fourth friend. If the fourth friend pressed on the doorbell 60 times, how many doorbell rings did the doorbell make?",
        "answer": 175,
        "examples": [{'input': {'x1': 4, 'x2': 20, 'x3': 10, 'x4': 60}, 'output': 175}],
        });
    fs.writeFileSync('json/100.json', json);
}
doit();
