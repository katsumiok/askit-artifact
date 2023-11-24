import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1090.json')) {
        console.log("Skipping 1090")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Caroline has {{x1}} children.  The first child is {{x2}} feet tall.  The second child is two inches taller than the first child.  The third child is {{x3}} inches shorter than the second child.  And the fourth child is three inches taller than the third child.  How tall is the fourth child, in inches?', [], [{'input': {'x1': 4, 'x2': 6, 'x3': 5}, 'output': 72}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4, 'x2': 6, 'x3': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 72;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1090,
        "question": 'Caroline has 4 children.  The first child is 6 feet tall.  The second child is two inches taller than the first child.  The third child is 5 inches shorter than the second child.  And the fourth child is three inches taller than the third child.  How tall is the fourth child, in inches?',
        "answer": 72,
        "examples": [{'input': {'x1': 4, 'x2': 6, 'x3': 5}, 'output': 72}],
        });
    fs.writeFileSync('json2/1090.json', json);
}
doit();
