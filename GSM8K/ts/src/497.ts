import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/497.json')) {
        console.log("Skipping 497")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Paul is driving a car twice a day: in the morning, and in the afternoon. He did that for {{x1}} days. Each morning ride cost him about $6, and each afternoon ride, about $2. How much money did he spend on driving his car during these two weeks?', [], [{'input': {'x1': 14}, 'output': 112}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 14});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 112;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 497,
        "question": 'Paul is driving a car twice a day: in the morning, and in the afternoon. He did that for 14 days. Each morning ride cost him about $6, and each afternoon ride, about $2. How much money did he spend on driving his car during these two weeks?',
        "answer": 112,
        "examples": [{'input': {'x1': 14}, 'output': 112}],
        });
    fs.writeFileSync('json/497.json', json);
}
doit();
