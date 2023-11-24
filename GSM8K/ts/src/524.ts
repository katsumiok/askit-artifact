import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/524.json')) {
        console.log("Skipping 524")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Jackson is planting tulips. He can fit {{x1}} red tulips in a row and {{x2}} blue tulips in a row. If Jackson buys {{x3}} red tulips and {{x4}} blue tulips, how many rows of flowers will he plant?', [], [{'input': {'x1': 6, 'x2': 8, 'x3': 36, 'x4': 24}, 'output': 9}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 6, 'x2': 8, 'x3': 36, 'x4': 24});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 9;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 524,
        "question": 'Jackson is planting tulips. He can fit 6 red tulips in a row and 8 blue tulips in a row. If Jackson buys 36 red tulips and 24 blue tulips, how many rows of flowers will he plant?',
        "answer": 9,
        "examples": [{'input': {'x1': 6, 'x2': 8, 'x3': 36, 'x4': 24}, 'output': 9}],
        });
    fs.writeFileSync('json/524.json', json);
}
doit();
