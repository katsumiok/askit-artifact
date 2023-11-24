import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/355.json')) {
        console.log("Skipping 355")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>("There are three trees in Eddy's backyard. The shortest tree has a height of {{x1}} feet, and the second tree has a height of {{x2}} feet more than the shortest tree. The height of the tallest tree is twice the height of the two trees combined. How tall is the tallest tree?", [], [{'input': {'x1': 6, 'x2': 5}, 'output': 34}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 6, 'x2': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 34;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 355,
        "question": "There are three trees in Eddy's backyard. The shortest tree has a height of 6 feet, and the second tree has a height of 5 feet more than the shortest tree. The height of the tallest tree is twice the height of the two trees combined. How tall is the tallest tree?",
        "answer": 34,
        "examples": [{'input': {'x1': 6, 'x2': 5}, 'output': 34}],
        });
    fs.writeFileSync('json2/355.json', json);
}
doit();
