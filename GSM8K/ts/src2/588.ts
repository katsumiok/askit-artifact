import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/588.json')) {
        console.log("Skipping 588")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Jared is trying to increase his typing speed. He starts with {{x1}} words per minute (WPM). After some lessons the next time he tests his typing speed it has increased to {{x2}} WPM. If he continues to increase his typing speed once more by {{x3}} words, what will be the average of the three measurements?', [], [{'input': {'x1': 47, 'x2': 52, 'x3': 5}, 'output': 52}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 47, 'x2': 52, 'x3': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 52;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 588,
        "question": 'Jared is trying to increase his typing speed. He starts with 47 words per minute (WPM). After some lessons the next time he tests his typing speed it has increased to 52 WPM. If he continues to increase his typing speed once more by 5 words, what will be the average of the three measurements?',
        "answer": 52,
        "examples": [{'input': {'x1': 47, 'x2': 52, 'x3': 5}, 'output': 52}],
        });
    fs.writeFileSync('json2/588.json', json);
}
doit();
