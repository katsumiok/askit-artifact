import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/235.json')) {
        console.log("Skipping 235")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('John orders some pizzas to share with his friends.  There are {{x1}} friends in total, and John wants to make sure each can have {{x2}} slices.  Pizzas are only sold sliced into {{x3}} portions.  How many Pizzas does John need to order?', [], [{'input': {'x1': 20, 'x2': 4, 'x3': 8}, 'output': 10}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 20, 'x2': 4, 'x3': 8});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 10;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 235,
        "question": 'John orders some pizzas to share with his friends.  There are 20 friends in total, and John wants to make sure each can have 4 slices.  Pizzas are only sold sliced into 8 portions.  How many Pizzas does John need to order?',
        "answer": 10,
        "examples": [{'input': {'x1': 20, 'x2': 4, 'x3': 8}, 'output': 10}],
        });
    fs.writeFileSync('json2/235.json', json);
}
doit();
