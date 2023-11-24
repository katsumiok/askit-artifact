import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/520.json')) {
        console.log("Skipping 520")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number, x6: number}>("Martha is knitting winter wear for her {{x1}} grandchildren. They're triplets, so they're all the same size. She wants to make a hat, scarf, sweater, mittens, and socks for each of them. It takes {{x2}} skeins of wool to make a hat, {{x3}} for a scarf, {{x4}} for a sweater, {{x5}} for a pair of mittens, and {{x6}} for a pair of socks. How many skeins of wool will she need to buy?", [], [{'input': {'x1': 3, 'x2': 2, 'x3': 4, 'x4': 12, 'x5': 1, 'x6': 2}, 'output': 63}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3, 'x2': 2, 'x3': 4, 'x4': 12, 'x5': 1, 'x6': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 63;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 520,
        "question": "Martha is knitting winter wear for her 3 grandchildren. They're triplets, so they're all the same size. She wants to make a hat, scarf, sweater, mittens, and socks for each of them. It takes 2 skeins of wool to make a hat, 4 for a scarf, 12 for a sweater, 1 for a pair of mittens, and 2 for a pair of socks. How many skeins of wool will she need to buy?",
        "answer": 63,
        "examples": [{'input': {'x1': 3, 'x2': 2, 'x3': 4, 'x4': 12, 'x5': 1, 'x6': 2}, 'output': 63}],
        });
    fs.writeFileSync('json/520.json', json);
}
doit();
