import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/679.json')) {
        console.log("Skipping 679")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('If {{x1}} potatoes makes {{x2}} hash browns, how many hash browns can you make out of {{x3}} potatoes?', [], [{'input': {'x1': 6, 'x2': 36, 'x3': 96}, 'output': 576}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 6, 'x2': 36, 'x3': 96});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 576;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 679,
        "question": 'If 6 potatoes makes 36 hash browns, how many hash browns can you make out of 96 potatoes?',
        "answer": 576,
        "examples": [{'input': {'x1': 6, 'x2': 36, 'x3': 96}, 'output': 576}],
        });
    fs.writeFileSync('json2/679.json', json);
}
doit();
