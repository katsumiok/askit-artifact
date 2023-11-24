import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/774.json')) {
        console.log("Skipping 774")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Jack decides to visit a museum {{x1}} miles from home.  He drives {{x2}} mph there and back.  He spends {{x3}} hours at the museum.  How long is he gone from home?', [], [{'input': {'x1': 150, 'x2': 75, 'x3': 6}, 'output': 10}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 150, 'x2': 75, 'x3': 6});
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
        "id": 774,
        "question": 'Jack decides to visit a museum 150 miles from home.  He drives 75 mph there and back.  He spends 6 hours at the museum.  How long is he gone from home?',
        "answer": 10,
        "examples": [{'input': {'x1': 150, 'x2': 75, 'x3': 6}, 'output': 10}],
        });
    fs.writeFileSync('json/774.json', json);
}
doit();
