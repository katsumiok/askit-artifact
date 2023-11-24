import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/332.json')) {
        console.log("Skipping 332")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('There are {{x1}} castles in Scotland. {{x2}} percent of them are ruins, and half of the ruined castles are unmanned.  How many unmanned ruined castles are there in Scotland?', [], [{'input': {'x1': 220, 'x2': 40}, 'output': 44}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 220, 'x2': 40});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 44;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 332,
        "question": 'There are 220 castles in Scotland.  40 percent of them are ruins, and half of the ruined castles are unmanned.  How many unmanned ruined castles are there in Scotland?',
        "answer": 44,
        "examples": [{'input': {'x1': 220, 'x2': 40}, 'output': 44}],
        });
    fs.writeFileSync('json/332.json', json);
}
doit();
