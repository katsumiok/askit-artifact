import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1206.json')) {
        console.log("Skipping 1206")
        return;
    }
    // measure time
    const f = define<number, {}>('John decides to get a loan by mortgaging his home.  His house is worth $250,000.  He gets a loan worth 40% of that.  He uses 60% of that to pay off his debts.  How much money did he have leftover after paying debt?', [], [{'input': {}, 'output': 40000}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 40000;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1206,
        "question": 'John decides to get a loan by mortgaging his home.  His house is worth $250,000.  He gets a loan worth 40% of that.  He uses 60% of that to pay off his debts.  How much money did he have leftover after paying debt?',
        "answer": 40000,
        "examples": [{'input': {}, 'output': 40000}],
        });
    fs.writeFileSync('json/1206.json', json);
}
doit();
