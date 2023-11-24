import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/689.json')) {
        console.log("Skipping 689")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Manolo bought five lollipops and four candies that cost $3.20. If each lollipop costs $0.40, how much will {{x1}} lollipops and {{x2}} candies cost him?', [], [{'input': {'x1': 10, 'x2': 10}, 'output': 7}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 10, 'x2': 10});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 7;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 689,
        "question": 'Manolo bought five lollipops and four candies that cost $3.20. If each lollipop costs $0.40, how much will 10 lollipops and 10 candies cost him?',
        "answer": 7,
        "examples": [{'input': {'x1': 10, 'x2': 10}, 'output': 7}],
        });
    fs.writeFileSync('json/689.json', json);
}
doit();
