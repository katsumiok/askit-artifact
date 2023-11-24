import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/838.json')) {
        console.log("Skipping 838")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number}>('Adam wants to eat some sliced apples. A large apple can be sliced into {{x1}} pieces, and a small apple can be sliced into {{x2}} pieces. Adam decides to slice {{x3}} large and {{x4}} small apples and then eats {{x5}} slices. How many apple slices are left?', [], [{'input': {'x1': 5, 'x2': 3, 'x3': 3, 'x4': 5, 'x5': 15}, 'output': 15}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5, 'x2': 3, 'x3': 3, 'x4': 5, 'x5': 15});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 15;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 838,
        "question": 'Adam wants to eat some sliced apples. A large apple can be sliced into 5 pieces, and a small apple can be sliced into 3 pieces. Adam decides to slice 3 large and 5 small apples and then eats 15 slices. How many apple slices are left?',
        "answer": 15,
        "examples": [{'input': {'x1': 5, 'x2': 3, 'x3': 3, 'x4': 5, 'x5': 15}, 'output': 15}],
        });
    fs.writeFileSync('json/838.json', json);
}
doit();
