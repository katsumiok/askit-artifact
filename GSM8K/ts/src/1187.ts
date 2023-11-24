import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1187.json')) {
        console.log("Skipping 1187")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Jay is making snowballs to prepare for a snowball fight with his sister. He can build {{x1}} snowballs in an hour, but {{x2}} melt every {{x3}} minutes. How long will it take before he has {{x4}} snowballs?', [], [{'input': {'x1': 20, 'x2': 2, 'x3': 15, 'x4': 60}, 'output': 5}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 20, 'x2': 2, 'x3': 15, 'x4': 60});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 5;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1187,
        "question": 'Jay is making snowballs to prepare for a snowball fight with his sister. He can build 20 snowballs in an hour, but 2 melt every 15 minutes. How long will it take before he has 60 snowballs?',
        "answer": 5,
        "examples": [{'input': {'x1': 20, 'x2': 2, 'x3': 15, 'x4': 60}, 'output': 5}],
        });
    fs.writeFileSync('json/1187.json', json);
}
doit();
