import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/563.json')) {
        console.log("Skipping 563")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('James decides to buy birthday candles for his {{x1}} sons.  One of them is {{x2}} and the other is {{x3}} years younger.  A pack of {{x4}} candles costs $3.  How much does James spend on candles?', [], [{'input': {'x1': 2, 'x2': 12, 'x3': 4, 'x4': 5}, 'output': 12}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2, 'x2': 12, 'x3': 4, 'x4': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 12;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 563,
        "question": 'James decides to buy birthday candles for his 2 sons.  One of them is 12 and the other is 4 years younger.  A pack of 5 candles costs $3.  How much does James spend on candles?',
        "answer": 12,
        "examples": [{'input': {'x1': 2, 'x2': 12, 'x3': 4, 'x4': 5}, 'output': 12}],
        });
    fs.writeFileSync('json2/563.json', json);
}
doit();
