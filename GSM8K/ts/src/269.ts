import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/269.json')) {
        console.log("Skipping 269")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('A juggler can juggle {{x1}} balls.  Half of the balls are golf balls, and half of the golf balls are blue.  How many blue golf balls are there?', [], [{'input': {'x1': 16}, 'output': 4}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 16});
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
        "id": 269,
        "question": 'A juggler can juggle 16 balls.  Half of the balls are golf balls, and half of the golf balls are blue.  How many blue golf balls are there?',
        "answer": 4,
        "examples": [{'input': {'x1': 16}, 'output': 4}],
        });
    fs.writeFileSync('json/269.json', json);
}
doit();
