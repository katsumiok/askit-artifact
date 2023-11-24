import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/720.json')) {
        console.log("Skipping 720")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Castle bought {{x1}} boxes of Coco Crunch and {{x2}} boxes of Fruit Loops this week. Last week she bought {{x3}} boxes of cereal. How many more boxes of cereal did she buy this week than last week?', [], [{'input': {'x1': 3, 'x2': 5, 'x3': 4}, 'output': 4}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3, 'x2': 5, 'x3': 4});
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
        "id": 720,
        "question": 'Castle bought 3 boxes of Coco Crunch and 5 boxes of Fruit Loops this week. Last week she bought 4 boxes of cereal. How many more boxes of cereal did she buy this week than last week?',
        "answer": 4,
        "examples": [{'input': {'x1': 3, 'x2': 5, 'x3': 4}, 'output': 4}],
        });
    fs.writeFileSync('json2/720.json', json);
}
doit();
