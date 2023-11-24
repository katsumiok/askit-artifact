import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/288.json')) {
        console.log("Skipping 288")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('A landscaping company is delivering flagstones to a customer’s yard. Each flagstone weighs {{x1}} pounds. If the delivery trucks can carry a total weight of {{x2}} pounds, how many trucks will be needed to transport {{x3}} flagstones in one trip?', [], [{'input': {'x1': 75, 'x2': 2000, 'x3': 80}, 'output': 3}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 75, 'x2': 2000, 'x3': 80});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 3;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 288,
        "question": 'A landscaping company is delivering flagstones to a customer’s yard. Each flagstone weighs 75 pounds. If the delivery trucks can carry a total weight of 2000 pounds, how many trucks will be needed to transport 80 flagstones in one trip?',
        "answer": 3,
        "examples": [{'input': {'x1': 75, 'x2': 2000, 'x3': 80}, 'output': 3}],
        });
    fs.writeFileSync('json/288.json', json);
}
doit();
