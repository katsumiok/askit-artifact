import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/986.json')) {
        console.log("Skipping 986")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Katherine has {{x1}} hanging baskets to fill.  In each basket she wants to add {{x2}} petunias and {{x3}} sweet potato vines.  The petunias cost $3.00 apiece and the sweet potato vines cost $2.50 apiece.  How much will she spend filling all {{x4}} hanging baskets?', [], [{'input': {'x1': 5, 'x2': 3, 'x3': 2, 'x4': 5}, 'output': 70}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5, 'x2': 3, 'x3': 2, 'x4': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 70;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 986,
        "question": 'Katherine has 5 hanging baskets to fill.  In each basket she wants to add 3 petunias and 2 sweet potato vines.  The petunias cost $3.00 apiece and the sweet potato vines cost $2.50 apiece.  How much will she spend filling all 5 hanging baskets?',
        "answer": 70,
        "examples": [{'input': {'x1': 5, 'x2': 3, 'x3': 2, 'x4': 5}, 'output': 70}],
        });
    fs.writeFileSync('json/986.json', json);
}
doit();
