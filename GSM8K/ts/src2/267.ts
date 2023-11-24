import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/267.json')) {
        console.log("Skipping 267")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('It takes {{x1}} minutes for the oil to heat up to {{x2}} degrees.  It then takes 40% longer for the oil to heat up to the desired temperature of {{x3}} degrees.  After warming the oil it takes {{x4}} minutes less time to cook than it took to warm up the oil.  How much time passes from starting the oil to having cooked chicken?', [], [{'input': {'x1': 20, 'x2': 300, 'x3': 400, 'x4': 5}, 'output': 91}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 20, 'x2': 300, 'x3': 400, 'x4': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 91;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 267,
        "question": 'It takes 20 minutes for the oil to heat up to 300 degrees.  It then takes 40% longer for the oil to heat up to the desired temperature of 400 degrees.  After warming the oil it takes 5 minutes less time to cook than it took to warm up the oil.  How much time passes from starting the oil to having cooked chicken?',
        "answer": 91,
        "examples": [{'input': {'x1': 20, 'x2': 300, 'x3': 400, 'x4': 5}, 'output': 91}],
        });
    fs.writeFileSync('json2/267.json', json);
}
doit();
