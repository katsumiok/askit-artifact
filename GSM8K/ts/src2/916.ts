import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/916.json')) {
        console.log("Skipping 916")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>("Julia and Nadine were given the same amount of allowance by their mother. The two girls decided to combine their allowance to surprise their father on his birthday. They bought a cake which costs $11. They also bought {{x1}} dozen balloons which were sold for $0.5 for {{x2}} balloons. The remaining money was used to buy {{x3}} tubs of ice cream for $7 each. How much did Julia and Nadine's mother give each one of them?", [], [{'input': {'x1': 1, 'x2': 2, 'x3': 2}, 'output': 14}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 1, 'x2': 2, 'x3': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 14;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 916,
        "question": "Julia and Nadine were given the same amount of allowance by their mother. The two girls decided to combine their allowance to surprise their father on his birthday. They bought a cake which costs $11. They also bought 1 dozen balloons which were sold for $0.5 for 2 balloons. The remaining money was used to buy 2 tubs of ice cream for $7 each. How much did Julia and Nadine's mother give each one of them?",
        "answer": 14,
        "examples": [{'input': {'x1': 1, 'x2': 2, 'x3': 2}, 'output': 14}],
        });
    fs.writeFileSync('json2/916.json', json);
}
doit();
