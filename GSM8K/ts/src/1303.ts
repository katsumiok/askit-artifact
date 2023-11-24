import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1303.json')) {
        console.log("Skipping 1303")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>("Nate's dog can dig six holes a day. He digs for {{x1}} days while Nate is on vacation. When Nate gets home, he starts filling in {{x2}} holes a day, but the dog keeps digging {{x3}} new holes every night. How many weeks does it take him to fill in all the holes?", [], [{'input': {'x1': 14, 'x2': 9, 'x3': 6}, 'output': 4}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 14, 'x2': 9, 'x3': 6});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 4;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1303,
        "question": "Nate's dog can dig six holes a day. He digs for 14 days while Nate is on vacation. When Nate gets home, he starts filling in 9 holes a day, but the dog keeps digging 6 new holes every night. How many weeks does it take him to fill in all the holes?",
        "answer": 4,
        "examples": [{'input': {'x1': 14, 'x2': 9, 'x3': 6}, 'output': 4}],
        });
    fs.writeFileSync('json/1303.json', json);
}
doit();
