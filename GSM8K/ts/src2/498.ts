import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/498.json')) {
        console.log("Skipping 498")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Brianne and Ashley make greek orange pie. Ashley brought five boxes with ten oranges in each box, while Brianne brought {{x1}} more oranges than Ashley. If one greek orange pie needs three oranges, how many greek orange pies can they make?', [], [{'input': {'x1': 20}, 'output': 40}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 20});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 40;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 498,
        "question": 'Brianne and Ashley make greek orange pie. Ashley brought five boxes with ten oranges in each box, while Brianne brought 20 more oranges than Ashley. If one greek orange pie needs three oranges, how many greek orange pies can they make?',
        "answer": 40,
        "examples": [{'input': {'x1': 20}, 'output': 40}],
        });
    fs.writeFileSync('json2/498.json', json);
}
doit();
