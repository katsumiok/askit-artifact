import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/37.json')) {
        console.log("Skipping 37")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('John plans to sell all his toys and use the money to buy video games. He has {{x1}} lego sets and he sells them for $15 each. He ends up buying {{x2}} video games for $20 each and has $5 left. How many lego sets does he still have?', [], [{'input': {'x1': 13, 'x2': 8}, 'output': 2}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 13, 'x2': 8});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 2;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 37,
        "question": 'John plans to sell all his toys and use the money to buy video games. He has 13 lego sets and he sells them for $15 each. He ends up buying 8 video games for $20 each and has $5 left. How many lego sets does he still have?',
        "answer": 2,
        "examples": [{'input': {'x1': 13, 'x2': 8}, 'output': 2}],
        });
    fs.writeFileSync('json/37.json', json);
}
doit();
