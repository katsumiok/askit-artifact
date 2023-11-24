import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1272.json')) {
        console.log("Skipping 1272")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Helen went on a trip through Germany. She booked a hotel for {{x1}} nights and rode the bus {{x2}} times during that trip. One night at the hotel was a cost of $80, and every bus trip was 10% of the price of one night at the hotel. How much did Helen pay for the hotel and bus travels during that trip?', [], [{'input': {'x1': 3, 'x2': 7}, 'output': 296}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3, 'x2': 7});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 296;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1272,
        "question": 'Helen went on a trip through Germany. She booked a hotel for 3 nights and rode the bus 7 times during that trip. One night at the hotel was a cost of $80, and every bus trip was 10% of the price of one night at the hotel. How much did Helen pay for the hotel and bus travels during that trip?',
        "answer": 296,
        "examples": [{'input': {'x1': 3, 'x2': 7}, 'output': 296}],
        });
    fs.writeFileSync('json/1272.json', json);
}
doit();
