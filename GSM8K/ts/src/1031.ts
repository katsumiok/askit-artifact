import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1031.json')) {
        console.log("Skipping 1031")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Apple High School is holding graduation in their Fine Arts Center this year which has space for {{x1}} people.  After accounting for {{x2}} seats for graduates and {{x3}} seats for faculty attending, how many tickets would each graduate receive to give to their friends and family if the tickets are split equally?', [], [{'input': {'x1': 6000, 'x2': 950, 'x3': 300}, 'output': 5}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 6000, 'x2': 950, 'x3': 300});
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
        "id": 1031,
        "question": 'Apple High School is holding graduation in their Fine Arts Center this year which has space for 6000 people.  After accounting for 950 seats for graduates and 300 seats for faculty attending, how many tickets would each graduate receive to give to their friends and family if the tickets are split equally?',
        "answer": 5,
        "examples": [{'input': {'x1': 6000, 'x2': 950, 'x3': 300}, 'output': 5}],
        });
    fs.writeFileSync('json/1031.json', json);
}
doit();
