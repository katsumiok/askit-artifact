import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/305.json')) {
        console.log("Skipping 305")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('John arm wrestles {{x1}} people.  He beats 80%.  How many people did he lose to?', [], [{'input': {'x1': 20}, 'output': 4}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 20});
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
        "id": 305,
        "question": 'John arm wrestles 20 people.  He beats 80%.  How many people did he lose to?',
        "answer": 4,
        "examples": [{'input': {'x1': 20}, 'output': 4}],
        });
    fs.writeFileSync('json/305.json', json);
}
doit();
