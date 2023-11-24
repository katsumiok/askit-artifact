import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/764.json')) {
        console.log("Skipping 764")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Leila buys {{x1}} cucumbers from the market. Cucumbers are $2 each. Jack buys {{x2}} tomatoes from the grocery store.  Tomatoes are $1 each. Chase buys {{x3}} head of lettuce from the farmer’s market.  Lettuce cost $3 each. Together, how much did the three of them spend to make a salad for the potluck?', [], [{'input': {'x1': 3, 'x2': 5, 'x3': 1}, 'output': 14}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3, 'x2': 5, 'x3': 1});
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
        "id": 764,
        "question": 'Leila buys 3 cucumbers from the market. Cucumbers are $2 each. Jack buys 5 tomatoes from the grocery store.  Tomatoes are $1 each. Chase buys 1 head of lettuce from the farmer’s market.  Lettuce cost $3 each. Together, how much did the three of them spend to make a salad for the potluck?',
        "answer": 14,
        "examples": [{'input': {'x1': 3, 'x2': 5, 'x3': 1}, 'output': 14}],
        });
    fs.writeFileSync('json2/764.json', json);
}
doit();
