import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/310.json')) {
        console.log("Skipping 310")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Theo has $6000 he wishes to spend on his upcoming business trip to South Africa. He buys {{x1}} business suits at $100 each, {{x2}} suitcases at $50 each, a flight ticket that costs $700 more than {{x3}} times as much as the cost of a business suit. He wishes to save $2000 for this trip, how much does he have to spend on buying gifts for his business partners in South Africa?', [], [{'input': {'x1': 6, 'x2': 3, 'x3': 5}, 'output': 2050}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 6, 'x2': 3, 'x3': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 2050;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 310,
        "question": 'Theo has $6000 he wishes to spend on his upcoming business trip to South Africa. He buys 6 business suits at $100 each, 3 suitcases at $50 each, a flight ticket that costs $700 more than 5 times as much as the cost of a business suit. He wishes to save $2000 for this trip, how much does he have to spend on buying gifts for his business partners in South Africa?',
        "answer": 2050,
        "examples": [{'input': {'x1': 6, 'x2': 3, 'x3': 5}, 'output': 2050}],
        });
    fs.writeFileSync('json2/310.json', json);
}
doit();
