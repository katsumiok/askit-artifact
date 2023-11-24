import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1293.json')) {
        console.log("Skipping 1293")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('A company produces chocolate in bars. In one day, it can produce {{x1}} bars. The company sells all the produced bars for $2 per bar. How much money will the company receive for selling produced chocolate bars during two weeks?', [], [{'input': {'x1': 5000}, 'output': 140000}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5000});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 140000;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1293,
        "question": 'A company produces chocolate in bars. In one day, it can produce 5000 bars. The company sells all the produced bars for $2 per bar. How much money will the company receive for selling produced chocolate bars during two weeks?',
        "answer": 140000,
        "examples": [{'input': {'x1': 5000}, 'output': 140000}],
        });
    fs.writeFileSync('json2/1293.json', json);
}
doit();
