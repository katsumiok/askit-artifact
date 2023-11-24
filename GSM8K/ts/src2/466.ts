import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/466.json')) {
        console.log("Skipping 466")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number}>('Becky bought {{x1}} apples for {{x2}} cents each and received a $1 discount. Kelly bought {{x3}} apples for {{x4}} cents each and received a {{x5}} percent discount. How much more did Kelly pay than Becky?', [], [{'input': {'x1': 20, 'x2': 45, 'x3': 20, 'x4': 50, 'x5': 10}, 'output': 1}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 20, 'x2': 45, 'x3': 20, 'x4': 50, 'x5': 10});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 1;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 466,
        "question": 'Becky bought 20 apples for 45 cents each and received a $1 discount. Kelly bought 20 apples for 50 cents each and received a 10 percent discount. How much more did Kelly pay than Becky?',
        "answer": 1,
        "examples": [{'input': {'x1': 20, 'x2': 45, 'x3': 20, 'x4': 50, 'x5': 10}, 'output': 1}],
        });
    fs.writeFileSync('json2/466.json', json);
}
doit();
