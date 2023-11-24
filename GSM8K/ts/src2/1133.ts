import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1133.json')) {
        console.log("Skipping 1133")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Grandma walks {{x1}} miles every day on her favorite walking trail, which includes {{x2}} miles of walking on the beach and {{x3}} mile of walking on the sidewalk.  On the sidewalk, Grandma walks at twice the rate of speed that she does on the beach.  If {{x4}} minutes of her walk is spent on the beach, how long does it take for her to complete the entire 3-mile walk, in minutes?', [], [{'input': {'x1': 3, 'x2': 2, 'x3': 1, 'x4': 40}, 'output': 50}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3, 'x2': 2, 'x3': 1, 'x4': 40});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 50;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1133,
        "question": 'Grandma walks 3 miles every day on her favorite walking trail, which includes 2 miles of walking on the beach and 1 mile of walking on the sidewalk.  On the sidewalk, Grandma walks at twice the rate of speed that she does on the beach.  If 40 minutes of her walk is spent on the beach, how long does it take for her to complete the entire 3-mile walk, in minutes?',
        "answer": 50,
        "examples": [{'input': {'x1': 3, 'x2': 2, 'x3': 1, 'x4': 40}, 'output': 50}],
        });
    fs.writeFileSync('json2/1133.json', json);
}
doit();
