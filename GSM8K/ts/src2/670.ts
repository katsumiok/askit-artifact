import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/670.json')) {
        console.log("Skipping 670")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Robert had {{x1}} pounds of candy, Cindy had {{x2}} pounds of candy, and Aaron had {{x3}} pounds of candy after Halloween. If they decide to pool and share their candy equally with each other, how much candy would each of them have?', [], [{'input': {'x1': 3, 'x2': 5, 'x3': 4}, 'output': 4}]);
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
        "id": 670,
        "question": 'Robert had 3 pounds of candy, Cindy had 5 pounds of candy, and Aaron had 4 pounds of candy after Halloween. If they decide to pool and share their candy equally with each other, how much candy would each of them have?',
        "answer": 4,
        "examples": [{'input': {'x1': 3, 'x2': 5, 'x3': 4}, 'output': 4}],
        });
    fs.writeFileSync('json2/670.json', json);
}
doit();
