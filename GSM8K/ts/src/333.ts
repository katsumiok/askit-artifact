import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/333.json')) {
        console.log("Skipping 333")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>("Robert wants to buy a bookshelf and a sofa and has received two offers. Furniture United's offer includes a $1,350 advance payment and {{x1}} monthly installments of $350 each. Cozy Homes' offer includes a $1,100 advance payment and {{x2}} monthly installments of $250 each. What is the cost difference between the two offers?", [], [{'input': {'x1': 6, 'x2': 9}, 'output': 100}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 6, 'x2': 9});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 100;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 333,
        "question": "Robert wants to buy a bookshelf and a sofa and has received two offers. Furniture United's offer includes a $1,350 advance payment and 6 monthly installments of $350 each. Cozy Homes' offer includes a $1,100 advance payment and 9 monthly installments of $250 each. What is the cost difference between the two offers?",
        "answer": 100,
        "examples": [{'input': {'x1': 6, 'x2': 9}, 'output': 100}],
        });
    fs.writeFileSync('json/333.json', json);
}
doit();
