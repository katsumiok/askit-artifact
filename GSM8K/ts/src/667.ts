import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/667.json')) {
        console.log("Skipping 667")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Sarah’s basketball games are {{x1}} quarters that are each {{x2}} minutes long. In the last quarter, there was a tie so the game was extended for five minutes. How long did the entire game last?', [], [{'input': {'x1': 4, 'x2': 12}, 'output': 53}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4, 'x2': 12});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 53;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 667,
        "question": 'Sarah’s basketball games are 4 quarters that are each 12 minutes long. In the last quarter, there was a tie so the game was extended for five minutes. How long did the entire game last?',
        "answer": 53,
        "examples": [{'input': {'x1': 4, 'x2': 12}, 'output': 53}],
        });
    fs.writeFileSync('json/667.json', json);
}
doit();
