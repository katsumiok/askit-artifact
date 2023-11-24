import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1288.json')) {
        console.log("Skipping 1288")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Every day Charisma meditates for {{x1}} minutes when she first wakes up and again before she goes to sleep. {{x2}} days a week she practices {{x3}} hour of yoga.  in {{x4}} weeks, how much time has she spent on meditation/yoga practice?', [], [{'input': {'x1': 15, 'x2': 5, 'x3': 1, 'x4': 4}, 'output': 34}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 15, 'x2': 5, 'x3': 1, 'x4': 4});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 34;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1288,
        "question": 'Every day Charisma meditates for 15 minutes when she first wakes up and again before she goes to sleep.  5 days a week she practices 1 hour of yoga.  in 4 weeks, how much time has she spent on meditation/yoga practice?',
        "answer": 34,
        "examples": [{'input': {'x1': 15, 'x2': 5, 'x3': 1, 'x4': 4}, 'output': 34}],
        });
    fs.writeFileSync('json2/1288.json', json);
}
doit();
