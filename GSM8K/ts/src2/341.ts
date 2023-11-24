import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/341.json')) {
        console.log("Skipping 341")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('A pink frog weighs the same as a blue beetle, the same as a green toad, {{x1}} pounds less than a yellow snake, but {{x2}} pounds more than a red bird. If the pink frog weighs {{x3}} pounds, calculate the total weight of a container carrying one of each animal if the container also weighs {{x4}} pounds.', [], [{'input': {'x1': 10, 'x2': 20, 'x3': 50, 'x4': 20}, 'output': 260}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 10, 'x2': 20, 'x3': 50, 'x4': 20});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 260;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 341,
        "question": 'A pink frog weighs the same as a blue beetle, the same as a green toad, 10 pounds less than a yellow snake, but 20 pounds more than a red bird. If the pink frog weighs 50 pounds, calculate the total weight of a container carrying one of each animal if the container also weighs 20 pounds.',
        "answer": 260,
        "examples": [{'input': {'x1': 10, 'x2': 20, 'x3': 50, 'x4': 20}, 'output': 260}],
        });
    fs.writeFileSync('json2/341.json', json);
}
doit();
