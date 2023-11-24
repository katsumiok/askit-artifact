import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1302.json')) {
        console.log("Skipping 1302")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Matthew has a collection of {{x1}} unique toy soldiers. He wants to sell them for a fair price. He found a buyer who is willing to pay for half his collection $5 per toy, and for the other half $7 per toy. If Matthew would agree to that offer, how much money would he earn?', [], [{'input': {'x1': 12}, 'output': 72}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 12});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 72;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1302,
        "question": 'Matthew has a collection of 12 unique toy soldiers. He wants to sell them for a fair price. He found a buyer who is willing to pay for half his collection $5 per toy, and for the other half $7 per toy. If Matthew would agree to that offer, how much money would he earn?',
        "answer": 72,
        "examples": [{'input': {'x1': 12}, 'output': 72}],
        });
    fs.writeFileSync('json2/1302.json', json);
}
doit();
