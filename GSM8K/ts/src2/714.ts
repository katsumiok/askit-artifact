import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/714.json')) {
        console.log("Skipping 714")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('James decides to pick some blueberries.  It cost $20 to go picking and then another $1.5 per pound.  He picked {{x1}} pounds of blueberries.  How much did he save compared to buying at the store for $2.5 a pound?', [], [{'input': {'x1': 30}, 'output': 10}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 30});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 10;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 714,
        "question": 'James decides to pick some blueberries.  It cost $20 to go picking and then another $1.5 per pound.  He picked 30 pounds of blueberries.  How much did he save compared to buying at the store for $2.5 a pound?',
        "answer": 10,
        "examples": [{'input': {'x1': 30}, 'output': 10}],
        });
    fs.writeFileSync('json2/714.json', json);
}
doit();
