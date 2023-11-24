import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/216.json')) {
        console.log("Skipping 216")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>("Janeth borrowed $2000 and promised to return it with an additional 10% of the amount. If she is going to pay $165 a month for {{x1}} months, how much will be Janeth's remaining balance by then?", [], [{'input': {'x1': 12}, 'output': 220}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 12});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 220;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 216,
        "question": "Janeth borrowed $2000 and promised to return it with an additional 10% of the amount. If she is going to pay $165 a month for 12 months, how much will be Janeth's remaining balance by then?",
        "answer": 220,
        "examples": [{'input': {'x1': 12}, 'output': 220}],
        });
    fs.writeFileSync('json2/216.json', json);
}
doit();
