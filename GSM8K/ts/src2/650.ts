import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/650.json')) {
        console.log("Skipping 650")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('On Tuesday, Clara bought {{x1}} pomegranates at $20 each. At the till she got $2 off because she had a voucher. The next day, the price shot to $30 per fruit, but the store also offered a 10% discount on the total cost. Sheila took advantage of the discount and bought {{x2}} pomegranates. What is the difference between the final prices paid for the pomegranates on the two days?', [], [{'input': {'x1': 20, 'x2': 20}, 'output': 142}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 20, 'x2': 20});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 142;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 650,
        "question": 'On Tuesday, Clara bought 20 pomegranates at $20 each. At the till she got $2 off because she had a voucher. The next day, the price shot to $30 per fruit, but the store also offered a 10% discount on the total cost. Sheila took advantage of the discount and bought 20 pomegranates. What is the difference between the final prices paid for the pomegranates on the two days?',
        "answer": 142,
        "examples": [{'input': {'x1': 20, 'x2': 20}, 'output': 142}],
        });
    fs.writeFileSync('json2/650.json', json);
}
doit();
