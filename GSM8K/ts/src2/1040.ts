import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1040.json')) {
        console.log("Skipping 1040")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('On Monday the post office delivered {{x1}} letters. On Tuesday they delivered {{x2}} more than one-fifth as many as Monday. On Wednesday they delivered {{x3}} more than twice as many as they delivered on Tuesday. How many letters did the post office deliver Monday - Wednesday?', [], [{'input': {'x1': 425, 'x2': 17, 'x3': 5}, 'output': 736}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 425, 'x2': 17, 'x3': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 736;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1040,
        "question": 'On Monday the post office delivered 425 letters. On Tuesday they delivered 17 more than one-fifth as many as Monday. On Wednesday they delivered 5 more than twice as many as they delivered on Tuesday. How many letters did the post office deliver Monday - Wednesday?',
        "answer": 736,
        "examples": [{'input': {'x1': 425, 'x2': 17, 'x3': 5}, 'output': 736}],
        });
    fs.writeFileSync('json2/1040.json', json);
}
doit();
