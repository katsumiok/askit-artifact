import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1174.json')) {
        console.log("Skipping 1174")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Thomas withdraws $1000 in {{x1}} dollar bills from the bank account.  He loses {{x2}} bills while getting home.  After that, he uses half of the remaining bills to pay for a bill.  Thomas then triples his money.  He then converts all his bills to {{x3}} dollar bills.  How many {{x4}} dollar bills does he have?', [], [{'input': {'x1': 20, 'x2': 10, 'x3': 5, 'x4': 5}, 'output': 240}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 20, 'x2': 10, 'x3': 5, 'x4': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 240;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1174,
        "question": 'Thomas withdraws $1000 in 20 dollar bills from the bank account.  He loses 10 bills while getting home.  After that, he uses half of the remaining bills to pay for a bill.  Thomas then triples his money.  He then converts all his bills to 5 dollar bills.  How many 5 dollar bills does he have?',
        "answer": 240,
        "examples": [{'input': {'x1': 20, 'x2': 10, 'x3': 5, 'x4': 5}, 'output': 240}],
        });
    fs.writeFileSync('json/1174.json', json);
}
doit();
