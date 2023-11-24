import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/136.json')) {
        console.log("Skipping 136")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('There are {{x1}} unicorns left in the world.  One third of them are in the Scottish Highlands.  Two thirds of the Scottish unicorns are female.  How many female Scottish unicorns are there?', [], [{'input': {'x1': 27}, 'output': 6}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 27});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 6;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 136,
        "question": 'There are 27 unicorns left in the world.  One third of them are in the Scottish Highlands.  Two thirds of the Scottish unicorns are female.  How many female Scottish unicorns are there?',
        "answer": 6,
        "examples": [{'input': {'x1': 27}, 'output': 6}],
        });
    fs.writeFileSync('json/136.json', json);
}
doit();
