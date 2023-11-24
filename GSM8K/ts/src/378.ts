import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/378.json')) {
        console.log("Skipping 378")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Lindsay is doing the laundry, and thinks she has missed some socks. There are {{x1}} socks that need washing. If she washes {{x2}} pairs of socks and {{x3}} loose socks, how many socks has Lindsay missed?', [], [{'input': {'x1': 50, 'x2': 10, 'x3': 15}, 'output': 15}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 50, 'x2': 10, 'x3': 15});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 15;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 378,
        "question": 'Lindsay is doing the laundry, and thinks she has missed some socks. There are 50 socks that need washing. If she washes 10 pairs of socks and 15 loose socks, how many socks has Lindsay missed?',
        "answer": 15,
        "examples": [{'input': {'x1': 50, 'x2': 10, 'x3': 15}, 'output': 15}],
        });
    fs.writeFileSync('json/378.json', json);
}
doit();
