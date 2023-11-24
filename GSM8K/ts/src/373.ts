import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/373.json')) {
        console.log("Skipping 373")
        return;
    }
    // measure time
    const f = define<number, {}>('A company bought $400000 worth of equipment from a retailer business, but pieces of equipment worth 40% of the total number were faulty. If they returned the faulty pieces of equipment to the seller, calculate the total amount of money spent on functioning pieces of equipment.', [], [{'input': {}, 'output': 240000}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 240000;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 373,
        "question": 'A company bought $400000 worth of equipment from a retailer business, but pieces of equipment worth 40% of the total number were faulty. If they returned the faulty pieces of equipment to the seller, calculate the total amount of money spent on functioning pieces of equipment.',
        "answer": 240000,
        "examples": [{'input': {}, 'output': 240000}],
        });
    fs.writeFileSync('json/373.json', json);
}
doit();
