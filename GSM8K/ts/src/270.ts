import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/270.json')) {
        console.log("Skipping 270")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Mary buys {{x1}} bags of M&Ms. The first bag has {{x2}} M&Ms in it. The second bag has {{x3}} more M&Ms than the first, and the third bag has a hole in it, so it only has half the number of M&Ms that the first bag had. How many M&Ms did Mary get total?', [], [{'input': {'x1': 3, 'x2': 300, 'x3': 12}, 'output': 762}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3, 'x2': 300, 'x3': 12});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 762;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 270,
        "question": 'Mary buys 3 bags of M&Ms. The first bag has 300 M&Ms in it. The second bag has 12 more M&Ms than the first, and the third bag has a hole in it, so it only has half the number of M&Ms that the first bag had. How many M&Ms did Mary get total?',
        "answer": 762,
        "examples": [{'input': {'x1': 3, 'x2': 300, 'x3': 12}, 'output': 762}],
        });
    fs.writeFileSync('json/270.json', json);
}
doit();
