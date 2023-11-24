import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/430.json')) {
        console.log("Skipping 430")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Charlotte went into the kitchen supply store knowing she wanted a set of pot and pans for $120.00, a set of mixing bowls for $20.00 and {{x1}} separate utensils at $5.00 each.  At check out, the clerk told her everything was 20% off.  How much was her order?', [], [{'input': {'x1': 5}, 'output': 132}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 132;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 430,
        "question": 'Charlotte went into the kitchen supply store knowing she wanted a set of pot and pans for $120.00, a set of mixing bowls for $20.00 and 5 separate utensils at $5.00 each.  At check out, the clerk told her everything was 20% off.  How much was her order?',
        "answer": 132,
        "examples": [{'input': {'x1': 5}, 'output': 132}],
        });
    fs.writeFileSync('json/430.json', json);
}
doit();
