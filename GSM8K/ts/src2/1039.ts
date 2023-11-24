import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1039.json')) {
        console.log("Skipping 1039")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Jim is making a comforter for his king-sized bed. He needs two pieces of fabric that are {{x1}} feet longer and {{x2}} feet wider than the bed, which measures {{x3}} feet long by {{x4}} feet wide. How many square feet of fabric does Jim need to buy?', [], [{'input': {'x1': 2, 'x2': 2, 'x3': 6, 'x4': 8}, 'output': 160}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2, 'x2': 2, 'x3': 6, 'x4': 8});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 160;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1039,
        "question": 'Jim is making a comforter for his king-sized bed. He needs two pieces of fabric that are 2 feet longer and 2 feet wider than the bed, which measures 6 feet long by 8 feet wide. How many square feet of fabric does Jim need to buy?',
        "answer": 160,
        "examples": [{'input': {'x1': 2, 'x2': 2, 'x3': 6, 'x4': 8}, 'output': 160}],
        });
    fs.writeFileSync('json2/1039.json', json);
}
doit();
