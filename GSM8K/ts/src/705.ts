import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/705.json')) {
        console.log("Skipping 705")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>("Martha's cat is {{x1}} times faster than her turtle. If the cat can run {{x2}} feet/second, how many feet can her turtle crawl in {{x3}} seconds?", [], [{'input': {'x1': 5, 'x2': 15, 'x3': 40}, 'output': 120}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5, 'x2': 15, 'x3': 40});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 120;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 705,
        "question": "Martha's cat is 5 times faster than her turtle. If the cat can run 15 feet/second, how many feet can her turtle crawl in 40 seconds?",
        "answer": 120,
        "examples": [{'input': {'x1': 5, 'x2': 15, 'x3': 40}, 'output': 120}],
        });
    fs.writeFileSync('json/705.json', json);
}
doit();
