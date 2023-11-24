import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/941.json')) {
        console.log("Skipping 941")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('There are {{x1}} pupils in a class. The teacher has {{x2}} coupons; each coupon can be redeemed for {{x3}} bottles of apple juice. The teacher gives each student {{x4}} bottles of apple juice to drink for lunch. After redeeming all her coupons and giving each student their apple juice lunch, how many bottles of apple juice does the teacher have for herself?', [], [{'input': {'x1': 29, 'x2': 9, 'x3': 100, 'x4': 2}, 'output': 842}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 29, 'x2': 9, 'x3': 100, 'x4': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 842;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 941,
        "question": 'There are 29 pupils in a class. The teacher has 9 coupons; each coupon can be redeemed for 100 bottles of apple juice. The teacher gives each student 2 bottles of apple juice to drink for lunch. After redeeming all her coupons and giving each student their apple juice lunch, how many bottles of apple juice does the teacher have for herself?',
        "answer": 842,
        "examples": [{'input': {'x1': 29, 'x2': 9, 'x3': 100, 'x4': 2}, 'output': 842}],
        });
    fs.writeFileSync('json2/941.json', json);
}
doit();
