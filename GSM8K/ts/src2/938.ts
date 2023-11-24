import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/938.json')) {
        console.log("Skipping 938")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number, x6: number, x7: number}>('John earned {{x1}} dollars an hour and worked {{x2}} hours in the week.  If he spends {{x3}} dollars on gas and wants to deposit {{x4}} dollars in the bank, how many {{x5}} dollar pens can he buy after he buys {{x6}} pencils that cost {{x7}} dollars each?', [], [{'input': {'x1': 50, 'x2': 6, 'x3': 50, 'x4': 100, 'x5': 25, 'x6': 5, 'x7': 10}, 'output': 4}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 50, 'x2': 6, 'x3': 50, 'x4': 100, 'x5': 25, 'x6': 5, 'x7': 10});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 4;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 938,
        "question": 'John earned 50 dollars an hour and worked 6 hours in the week.  If he spends 50 dollars on gas and wants to deposit 100 dollars in the bank, how many 25 dollar pens can he buy after he buys 5 pencils that cost 10 dollars each?',
        "answer": 4,
        "examples": [{'input': {'x1': 50, 'x2': 6, 'x3': 50, 'x4': 100, 'x5': 25, 'x6': 5, 'x7': 10}, 'output': 4}],
        });
    fs.writeFileSync('json2/938.json', json);
}
doit();
