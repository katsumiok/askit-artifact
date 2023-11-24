import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/990.json')) {
        console.log("Skipping 990")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number, x6: number}>('An air conditioner cools a room {{x1}} degrees an hour on low and {{x2}} degrees an hour on high. The room will warm up at {{x3}} degrees an hour with no air conditioner running. The air conditioner ran on low for {{x4}} hours, then it was turned up to high for {{x5}} hours. Afterward, it was turned off for {{x6}} hours. How many degrees lower than the starting temperature was the final temperature?', [], [{'input': {'x1': 2, 'x2': 3, 'x3': 2, 'x4': 3, 'x5': 4, 'x6': 2}, 'output': 14}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2, 'x2': 3, 'x3': 2, 'x4': 3, 'x5': 4, 'x6': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 14;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 990,
        "question": 'An air conditioner cools a room 2 degrees an hour on low and 3 degrees an hour on high. The room will warm up at 2 degrees an hour with no air conditioner running. The air conditioner ran on low for 3 hours, then it was turned up to high for 4 hours. Afterward, it was turned off for 2 hours. How many degrees lower than the starting temperature was the final temperature?',
        "answer": 14,
        "examples": [{'input': {'x1': 2, 'x2': 3, 'x3': 2, 'x4': 3, 'x5': 4, 'x6': 2}, 'output': 14}],
        });
    fs.writeFileSync('json/990.json', json);
}
doit();
