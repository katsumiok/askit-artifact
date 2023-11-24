import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/947.json')) {
        console.log("Skipping 947")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>("Jasmine's teacher gives stickers for reward. She was given {{x1}} stickers for participating in class, but she lost {{x2}} stickers during playtime. However, her teacher gave her another {{x3}} stickers for helping her classmates. How many stickers does she have at the end?", [], [{'input': {'x1': 15, 'x2': 7, 'x3': 5}, 'output': 13}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 15, 'x2': 7, 'x3': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 13;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 947,
        "question": "Jasmine's teacher gives stickers for reward. She was given 15 stickers for participating in class, but she lost 7 stickers during playtime. However, her teacher gave her another 5 stickers for helping her classmates. How many stickers does she have at the end?",
        "answer": 13,
        "examples": [{'input': {'x1': 15, 'x2': 7, 'x3': 5}, 'output': 13}],
        });
    fs.writeFileSync('json/947.json', json);
}
doit();
