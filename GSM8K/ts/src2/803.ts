import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/803.json')) {
        console.log("Skipping 803")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Kris is trying to earn a video game achievement for playing a total of {{x1}} hours. If Kris plays for half an hour every day for {{x2}} weeks then plays for {{x3}} hours every day for a week, how many hours does she still need to play to earn the achievement?', [], [{'input': {'x1': 30, 'x2': 2, 'x3': 2}, 'output': 9}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 30, 'x2': 2, 'x3': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 9;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 803,
        "question": 'Kris is trying to earn a video game achievement for playing a total of 30 hours. If Kris plays for half an hour every day for 2 weeks then plays for 2 hours every day for a week, how many hours does she still need to play to earn the achievement?',
        "answer": 9,
        "examples": [{'input': {'x1': 30, 'x2': 2, 'x3': 2}, 'output': 9}],
        });
    fs.writeFileSync('json2/803.json', json);
}
doit();
