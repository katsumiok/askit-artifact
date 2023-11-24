import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1089.json')) {
        console.log("Skipping 1089")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Nathan has a bouncy ball that bounces to 2/3rds of its starting height with each bounce. If he drops it from the third-floor balcony in the mall, where each story is {{x1}} feet high, how high does the ball go on its second bounce?', [], [{'input': {'x1': 24}, 'output': 32}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 24});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 32;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1089,
        "question": 'Nathan has a bouncy ball that bounces to 2/3rds of its starting height with each bounce. If he drops it from the third-floor balcony in the mall, where each story is 24 feet high, how high does the ball go on its second bounce?',
        "answer": 32,
        "examples": [{'input': {'x1': 24}, 'output': 32}],
        });
    fs.writeFileSync('json/1089.json', json);
}
doit();
