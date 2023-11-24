import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/547.json')) {
        console.log("Skipping 547")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>("A phone tree is used to contact families and relatives of Ali's deceased coworker. Ali decided to call {{x1}} families. Then each family calls {{x2}} other families, and so on. How many families will be notified during the fourth round of calls?", [], [{'input': {'x1': 3, 'x2': 3}, 'output': 81}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3, 'x2': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 81;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 547,
        "question": "A phone tree is used to contact families and relatives of Ali's deceased coworker. Ali decided to call 3 families. Then each family calls 3 other families, and so on. How many families will be notified during the fourth round of calls?",
        "answer": 81,
        "examples": [{'input': {'x1': 3, 'x2': 3}, 'output': 81}],
        });
    fs.writeFileSync('json/547.json', json);
}
doit();
