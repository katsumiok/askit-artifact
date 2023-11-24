import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/155.json')) {
        console.log("Skipping 155")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number}>('Bill bakes {{x1}} rolls, {{x2}} chocolate croissants, and {{x3}} baguettes every day. Each roll is {{x4}} inches long, each croissant is {{x5}} inches long, and each baguette is two feet long. If Bill puts all the baked goods end to end, how long will they be in feet?', [], [{'input': {'x1': 300, 'x2': 120, 'x3': 60, 'x4': 4, 'x5': 6}, 'output': 280}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 300, 'x2': 120, 'x3': 60, 'x4': 4, 'x5': 6});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 280;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 155,
        "question": 'Bill bakes 300 rolls, 120 chocolate croissants, and 60 baguettes every day. Each roll is 4 inches long, each croissant is 6 inches long, and each baguette is two feet long. If Bill puts all the baked goods end to end, how long will they be in feet?',
        "answer": 280,
        "examples": [{'input': {'x1': 300, 'x2': 120, 'x3': 60, 'x4': 4, 'x5': 6}, 'output': 280}],
        });
    fs.writeFileSync('json/155.json', json);
}
doit();
