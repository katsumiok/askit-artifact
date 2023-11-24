import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/394.json')) {
        console.log("Skipping 394")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Wendy wants to place {{x1}} more than double the number of books in a shelving system with {{x2}} rows and {{x3}} columns. How many books will she need to carry to complete her task?', [], [{'input': {'x1': 20, 'x2': 6, 'x3': 6}, 'output': 92}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 20, 'x2': 6, 'x3': 6});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 92;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 394,
        "question": 'Wendy wants to place 20 more than double the number of books in a shelving system with 6 rows and 6 columns. How many books will she need to carry to complete her task?',
        "answer": 92,
        "examples": [{'input': {'x1': 20, 'x2': 6, 'x3': 6}, 'output': 92}],
        });
    fs.writeFileSync('json2/394.json', json);
}
doit();
