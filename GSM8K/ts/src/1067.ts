import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1067.json')) {
        console.log("Skipping 1067")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Anthony is sending out coupons for his pizza parlor through the mail. He wants to send out {{x1}} small coupons and twice as many big coupons. If each small coupon costs {{x2}} cents to mail and each big coupon costs {{x3}} cents, how much does he spend on postage total?', [], [{'input': {'x1': 700, 'x2': 5, 'x3': 15}, 'output': 245}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 700, 'x2': 5, 'x3': 15});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 245;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1067,
        "question": 'Anthony is sending out coupons for his pizza parlor through the mail. He wants to send out 700 small coupons and twice as many big coupons. If each small coupon costs 5 cents to mail and each big coupon costs 15 cents, how much does he spend on postage total?',
        "answer": 245,
        "examples": [{'input': {'x1': 700, 'x2': 5, 'x3': 15}, 'output': 245}],
        });
    fs.writeFileSync('json/1067.json', json);
}
doit();
