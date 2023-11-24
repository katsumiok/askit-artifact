import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/359.json')) {
        console.log("Skipping 359")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Billy is buying some candy with $10 his father gave him. The candy costs $1.5 a pound. After buying candy, he takes half his change and spends it on gumballs, which cost $.05 each. If he bought {{x1}} gumballs, how many pounds of candy did he buy?', [], [{'input': {'x1': 40}, 'output': 4}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 40});
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
        "id": 359,
        "question": 'Billy is buying some candy with $10 his father gave him. The candy costs $1.5 a pound. After buying candy, he takes half his change and spends it on gumballs, which cost $.05 each. If he bought 40 gumballs, how many pounds of candy did he buy?',
        "answer": 4,
        "examples": [{'input': {'x1': 40}, 'output': 4}],
        });
    fs.writeFileSync('json2/359.json', json);
}
doit();
