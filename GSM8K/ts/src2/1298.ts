import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1298.json')) {
        console.log("Skipping 1298")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Justin has a jar with many coins in it. The jar has {{x1}} quarters, {{x2}} dimes, {{x3}} nickels, and {{x4}} pennies. What is the total dollar amount in the jar?', [], [{'input': {'x1': 32, 'x2': 95, 'x3': 120, 'x4': 750}, 'output': 31}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 32, 'x2': 95, 'x3': 120, 'x4': 750});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 31;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1298,
        "question": 'Justin has a jar with many coins in it. The jar has 32 quarters, 95 dimes, 120 nickels, and 750 pennies. What is the total dollar amount in the jar?',
        "answer": 31,
        "examples": [{'input': {'x1': 32, 'x2': 95, 'x3': 120, 'x4': 750}, 'output': 31}],
        });
    fs.writeFileSync('json2/1298.json', json);
}
doit();
