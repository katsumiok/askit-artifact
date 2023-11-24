import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/108.json')) {
        console.log("Skipping 108")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Henry is making cookies for a local baking competition. He wants to make twice as many as he did last year. When he finishes baking, he realizes he actually baked {{x1}} more cookies than he meant to. He drops {{x2}} of his cookies as he is putting them out to cool, and now has a total of {{x3}} cookies. How many cookies did Henry bake last year?', [], [{'input': {'x1': 15, 'x2': 5, 'x3': 110}, 'output': 50}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 15, 'x2': 5, 'x3': 110});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 50;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 108,
        "question": 'Henry is making cookies for a local baking competition. He wants to make twice as many as he did last year. When he finishes baking, he realizes he actually baked 15 more cookies than he meant to. He drops 5 of his cookies as he is putting them out to cool, and now has a total of 110 cookies. How many cookies did Henry bake last year?',
        "answer": 50,
        "examples": [{'input': {'x1': 15, 'x2': 5, 'x3': 110}, 'output': 50}],
        });
    fs.writeFileSync('json/108.json', json);
}
doit();
