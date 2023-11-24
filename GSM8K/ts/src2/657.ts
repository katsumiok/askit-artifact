import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/657.json')) {
        console.log("Skipping 657")
        return;
    }
    // measure time
    const f = define<number, {}>('James buys a plane.  The plane cost $150,000.  He pays $5000 a month to rent a hanger to keep it in.  He also spends twice as much as that on fuel per month.  How much did it cost him to get and maintain the plane for the first year?', [], [{'input': {}, 'output': 330000}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 330000;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 657,
        "question": 'James buys a plane.  The plane cost $150,000.  He pays $5000 a month to rent a hanger to keep it in.  He also spends twice as much as that on fuel per month.  How much did it cost him to get and maintain the plane for the first year?',
        "answer": 330000,
        "examples": [{'input': {}, 'output': 330000}],
        });
    fs.writeFileSync('json2/657.json', json);
}
doit();
