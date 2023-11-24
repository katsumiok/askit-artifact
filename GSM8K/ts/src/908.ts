import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/908.json')) {
        console.log("Skipping 908")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Dean has {{x1}} marbles. He gives 1/5  of them to Jamie and gives {{x2}} to Donald. How many marbles are left for Dean?', [], [{'input': {'x1': 30, 'x2': 10}, 'output': 14}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 30, 'x2': 10});
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
        "id": 908,
        "question": 'Dean has 30 marbles. He gives 1/5  of them to Jamie and gives 10 to Donald. How many marbles are left for Dean?',
        "answer": 14,
        "examples": [{'input': {'x1': 30, 'x2': 10}, 'output': 14}],
        });
    fs.writeFileSync('json/908.json', json);
}
doit();
