import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/631.json')) {
        console.log("Skipping 631")
        return;
    }
    // measure time
    const f = define<number, {}>('In a jewelers store, the price of a gold Jewell is 4/5 times as much as the price of a diamond Jewell. The cost of a silver Jewell is $400 less than the price of gold. If a diamond Jewell is $2000, find the total price for all three jewels.', [], [{'input': {}, 'output': 4800}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 4800;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 631,
        "question": 'In a jewelers store, the price of a gold Jewell is 4/5 times as much as the price of a diamond Jewell. The cost of a silver Jewell is $400 less than the price of gold. If a diamond Jewell is $2000, find the total price for all three jewels.',
        "answer": 4800,
        "examples": [{'input': {}, 'output': 4800}],
        });
    fs.writeFileSync('json/631.json', json);
}
doit();
