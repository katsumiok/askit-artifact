import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/211.json')) {
        console.log("Skipping 211")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Jerry has a flock of chickens. The red chickens produce {{x1}} eggs a day, and the white chickens produce {{x2}} eggs a day. Every day Jerry collects {{x3}} eggs. If he has two more white chickens than red chickens, how many red chickens does he have?', [], [{'input': {'x1': 3, 'x2': 5, 'x3': 42}, 'output': 4}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3, 'x2': 5, 'x3': 42});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 4;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 211,
        "question": 'Jerry has a flock of chickens. The red chickens produce 3 eggs a day, and the white chickens produce 5 eggs a day. Every day Jerry collects 42 eggs. If he has two more white chickens than red chickens, how many red chickens does he have?',
        "answer": 4,
        "examples": [{'input': {'x1': 3, 'x2': 5, 'x3': 42}, 'output': 4}],
        });
    fs.writeFileSync('json2/211.json', json);
}
doit();
