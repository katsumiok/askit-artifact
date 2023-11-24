import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/326.json')) {
        console.log("Skipping 326")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Some people got on a bus at the terminal. At the first bus stop, {{x1}} more people got in. Then at the second bus stop, {{x2}} people got down and {{x3}} more got in. If there were a total of {{x4}} people heading to the third stop, how many people got on the bus at the terminal?', [], [{'input': {'x1': 5, 'x2': 7, 'x3': 8, 'x4': 20}, 'output': 14}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5, 'x2': 7, 'x3': 8, 'x4': 20});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 14;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 326,
        "question": 'Some people got on a bus at the terminal. At the first bus stop, 5 more people got in. Then at the second bus stop, 7 people got down and 8 more got in. If there were a total of 20 people heading to the third stop, how many people got on the bus at the terminal?',
        "answer": 14,
        "examples": [{'input': {'x1': 5, 'x2': 7, 'x3': 8, 'x4': 20}, 'output': 14}],
        });
    fs.writeFileSync('json/326.json', json);
}
doit();
