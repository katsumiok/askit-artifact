import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1124.json')) {
        console.log("Skipping 1124")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Seth gave half of his stickers to Luis. Luis used half of the stickers and gave the rest to Kris.  Kris kept {{x1}} of the stickers and gave the remaining {{x2}} stickers to Rob. How many stickers did Seth have in the beginning?', [], [{'input': {'x1': 9, 'x2': 7}, 'output': 64}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 9, 'x2': 7});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 64;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1124,
        "question": 'Seth gave half of his stickers to Luis. Luis used half of the stickers and gave the rest to Kris.  Kris kept 9 of the stickers and gave the remaining 7 stickers to Rob. How many stickers did Seth have in the beginning?',
        "answer": 64,
        "examples": [{'input': {'x1': 9, 'x2': 7}, 'output': 64}],
        });
    fs.writeFileSync('json/1124.json', json);
}
doit();
