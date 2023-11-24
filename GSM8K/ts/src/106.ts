import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/106.json')) {
        console.log("Skipping 106")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number, x6: number}>('John has {{x1}} boxes.  Each box is {{x2}} inches by {{x3}} inches by {{x4}} inches.  The walls are {{x5}} inch thick.  What is the total inner volume of all {{x6}} boxes?', [], [{'input': {'x1': 3, 'x2': 5, 'x3': 6, 'x4': 4, 'x5': 1, 'x6': 3}, 'output': 72}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3, 'x2': 5, 'x3': 6, 'x4': 4, 'x5': 1, 'x6': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 72;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 106,
        "question": 'John has 3 boxes.  Each box is 5 inches by 6 inches by 4 inches.  The walls are 1 inch thick.  What is the total inner volume of all 3 boxes?',
        "answer": 72,
        "examples": [{'input': {'x1': 3, 'x2': 5, 'x3': 6, 'x4': 4, 'x5': 1, 'x6': 3}, 'output': 72}],
        });
    fs.writeFileSync('json/106.json', json);
}
doit();
