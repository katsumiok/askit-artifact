import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1095.json')) {
        console.log("Skipping 1095")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('If two trains depart from a station in opposite directions, and one train is traveling {{x1}} miles an hour while the other is traveling half that distance per hour, how far apart are they from each other after {{x2}} hours?', [], [{'input': {'x1': 60, 'x2': 3}, 'output': 270}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 60, 'x2': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 270;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1095,
        "question": 'If two trains depart from a station in opposite directions, and one train is traveling 60 miles an hour while the other is traveling half that distance per hour, how far apart are they from each other after 3 hours?',
        "answer": 270,
        "examples": [{'input': {'x1': 60, 'x2': 3}, 'output': 270}],
        });
    fs.writeFileSync('json2/1095.json', json);
}
doit();
