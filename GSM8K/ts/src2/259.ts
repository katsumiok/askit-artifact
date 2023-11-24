import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/259.json')) {
        console.log("Skipping 259")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Andrea has {{x1}} more apples than Jamal and half as many bananas as Jamal. Jamal has {{x2}} more bananas than apples. How many fruits are there if Andrea has {{x3}} apples?', [], [{'input': {'x1': 8, 'x2': 4, 'x3': 52}, 'output': 168}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 8, 'x2': 4, 'x3': 52});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 168;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 259,
        "question": 'Andrea has 8 more apples than Jamal and half as many bananas as Jamal. Jamal has 4 more bananas than apples. How many fruits are there if Andrea has 52 apples?',
        "answer": 168,
        "examples": [{'input': {'x1': 8, 'x2': 4, 'x3': 52}, 'output': 168}],
        });
    fs.writeFileSync('json2/259.json', json);
}
doit();
