import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1276.json')) {
        console.log("Skipping 1276")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('James wants to hang crepe-paper streamers from his backyard fence for his birthday party. His backyard fence is a rectangle that measures {{x1}} feet on the long side and {{x2}} feet on the short side. How many feet of crepe paper does James need to buy?', [], [{'input': {'x1': 20, 'x2': 15}, 'output': 70}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 20, 'x2': 15});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 70;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1276,
        "question": 'James wants to hang crepe-paper streamers from his backyard fence for his birthday party. His backyard fence is a rectangle that measures 20 feet on the long side and 15 feet on the short side. How many feet of crepe paper does James need to buy?',
        "answer": 70,
        "examples": [{'input': {'x1': 20, 'x2': 15}, 'output': 70}],
        });
    fs.writeFileSync('json/1276.json', json);
}
doit();
