import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/112.json')) {
        console.log("Skipping 112")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('A classroom has a whiteboard which is shared between the {{x1}} teachers who take turns using the classroom. Each teacher has {{x2}} lessons per day and uses the whiteboard in each lesson. If the whiteboard is cleaned {{x3}} times per lesson, how many times is the whiteboard cleaned in a day?', [], [{'input': {'x1': 4, 'x2': 2, 'x3': 3}, 'output': 24}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4, 'x2': 2, 'x3': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 24;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 112,
        "question": 'A classroom has a whiteboard which is shared between the 4 teachers who take turns using the classroom. Each teacher has 2 lessons per day and uses the whiteboard in each lesson. If the whiteboard is cleaned 3 times per lesson, how many times is the whiteboard cleaned in a day?',
        "answer": 24,
        "examples": [{'input': {'x1': 4, 'x2': 2, 'x3': 3}, 'output': 24}],
        });
    fs.writeFileSync('json/112.json', json);
}
doit();
