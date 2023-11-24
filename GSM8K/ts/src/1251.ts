import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1251.json')) {
        console.log("Skipping 1251")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>("It takes John {{x1}} minutes to get to the first side of the Rubik's cube.  The second and third sides each take twice that long.  The last {{x2}} sides each take half as long as the first, and once you get the 5th side you have all {{x3}} sides.  How long does the Rubik's cube take?", [], [{'input': {'x1': 5, 'x2': 2, 'x3': 6}, 'output': 30}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5, 'x2': 2, 'x3': 6});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 30;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1251,
        "question": "It takes John 5 minutes to get to the first side of the Rubik's cube.  The second and third sides each take twice that long.  The last 2 sides each take half as long as the first, and once you get the 5th side you have all 6 sides.  How long does the Rubik's cube take?",
        "answer": 30,
        "examples": [{'input': {'x1': 5, 'x2': 2, 'x3': 6}, 'output': 30}],
        });
    fs.writeFileSync('json/1251.json', json);
}
doit();
