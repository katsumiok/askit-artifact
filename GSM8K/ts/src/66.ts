import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/66.json')) {
        console.log("Skipping 66")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('There are four schools competing at a basketball tournament. Each school has sent a girls’ basketball team and a boys’ basketball team and each team has {{x1}} players each. Each school has also sent a coach for each team. In total, how many people have all of the schools sent?', [], [{'input': {'x1': 5}, 'output': 48}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 48;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 66,
        "question": 'There are four schools competing at a basketball tournament. Each school has sent a girls’ basketball team and a boys’ basketball team and each team has 5 players each. Each school has also sent a coach for each team. In total, how many people have all of the schools sent?',
        "answer": 48,
        "examples": [{'input': {'x1': 5}, 'output': 48}],
        });
    fs.writeFileSync('json/66.json', json);
}
doit();
