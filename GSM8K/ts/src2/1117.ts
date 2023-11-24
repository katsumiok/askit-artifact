import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1117.json')) {
        console.log("Skipping 1117")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('The light on a lighthouse blinks {{x1}} times in {{x2}} minutes. How long will it take the light to blink {{x3}} times?', [], [{'input': {'x1': 255, 'x2': 5, 'x3': 459}, 'output': 9}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 255, 'x2': 5, 'x3': 459});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 9;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1117,
        "question": 'The light on a lighthouse blinks 255 times in 5 minutes. How long will it take the light to blink 459 times?',
        "answer": 9,
        "examples": [{'input': {'x1': 255, 'x2': 5, 'x3': 459}, 'output': 9}],
        });
    fs.writeFileSync('json2/1117.json', json);
}
doit();
