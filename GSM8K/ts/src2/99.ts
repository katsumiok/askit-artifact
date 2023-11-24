import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/99.json')) {
        console.log("Skipping 99")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Mary is an avid gardener. Yesterday, she received {{x1}} new potted plants from her favorite plant nursery. She already has {{x2}} potted plants on each of the {{x3}} window ledges of her large country home. Feeling generous, she has decided that she will give {{x4}} potted plant from each ledge to friends and family tomorrow. How many potted plants will Mary remain with?', [], [{'input': {'x1': 18, 'x2': 2, 'x3': 40, 'x4': 1}, 'output': 58}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 18, 'x2': 2, 'x3': 40, 'x4': 1});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 58;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 99,
        "question": 'Mary is an avid gardener. Yesterday, she received 18 new potted plants from her favorite plant nursery. She already has 2 potted plants on each of the 40 window ledges of her large country home. Feeling generous, she has decided that she will give 1 potted plant from each ledge to friends and family tomorrow. How many potted plants will Mary remain with?',
        "answer": 58,
        "examples": [{'input': {'x1': 18, 'x2': 2, 'x3': 40, 'x4': 1}, 'output': 58}],
        });
    fs.writeFileSync('json2/99.json', json);
}
doit();
