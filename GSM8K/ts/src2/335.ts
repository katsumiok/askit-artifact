import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/335.json')) {
        console.log("Skipping 335")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Mason needs {{x1}} ounces of sugar to make a batch of suckers and {{x2}} ounces of sugar to make a batch of fudge. How much sugar does he need to make {{x3}} batches of suckers and {{x4}} batch of fudge?', [], [{'input': {'x1': 30, 'x2': 70, 'x3': 8, 'x4': 1}, 'output': 310}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 30, 'x2': 70, 'x3': 8, 'x4': 1});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 310;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 335,
        "question": 'Mason needs 30 ounces of sugar to make a batch of suckers and 70 ounces of sugar to make a batch of fudge. How much sugar does he need to make 8 batches of suckers and 1 batch of fudge?',
        "answer": 310,
        "examples": [{'input': {'x1': 30, 'x2': 70, 'x3': 8, 'x4': 1}, 'output': 310}],
        });
    fs.writeFileSync('json2/335.json', json);
}
doit();
