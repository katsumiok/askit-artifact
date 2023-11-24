import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/952.json')) {
        console.log("Skipping 952")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Vince can staple {{x1}} reports every {{x2}} minutes.  If he was stapling reports from 8:00 AM until 11:00 PM, how many reports did he staple altogether?', [], [{'input': {'x1': 30, 'x2': 15}, 'output': 360}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 30, 'x2': 15});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 360;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 952,
        "question": 'Vince can staple 30 reports every 15 minutes.  If he was stapling reports from 8:00 AM until 11:00 PM, how many reports did he staple altogether?',
        "answer": 360,
        "examples": [{'input': {'x1': 30, 'x2': 15}, 'output': 360}],
        });
    fs.writeFileSync('json/952.json', json);
}
doit();
