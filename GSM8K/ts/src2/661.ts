import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/661.json')) {
        console.log("Skipping 661")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>("Roger goes to the store to buy some coffee.  The normal brand of coffee he buys cost $5 per pound.  He had to buy a more expensive brand that cost 20% more since his favorite brand was sold out.  He decides to buy a week's worth of coffee and he uses {{x1}} pound of coffee per day.  He also decided to buy himself a donut for $2.  How much did everything cost?", [], [{'input': {'x1': 1}, 'output': 44}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 1});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 44;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 661,
        "question": "Roger goes to the store to buy some coffee.  The normal brand of coffee he buys cost $5 per pound.  He had to buy a more expensive brand that cost 20% more since his favorite brand was sold out.  He decides to buy a week's worth of coffee and he uses 1 pound of coffee per day.  He also decided to buy himself a donut for $2.  How much did everything cost?",
        "answer": 44,
        "examples": [{'input': {'x1': 1}, 'output': 44}],
        });
    fs.writeFileSync('json2/661.json', json);
}
doit();
