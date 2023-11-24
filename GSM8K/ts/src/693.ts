import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/693.json')) {
        console.log("Skipping 693")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>("Brittany's quilted comforter has many 1-foot by 1-foot colored squares. The comforter had {{x1}} red squares, {{x2}} more blue squares than red squares, {{x3}} more green squares than blue squares, and {{x4}} fewer white squares than green squares.  How many square feet is Brittany's comforter?", [], [{'input': {'x1': 14, 'x2': 4, 'x3': 6, 'x4': 12}, 'output': 68}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 14, 'x2': 4, 'x3': 6, 'x4': 12});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 68;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 693,
        "question": "Brittany's quilted comforter has many 1-foot by 1-foot colored squares. The comforter had 14 red squares, 4 more blue squares than red squares, 6 more green squares than blue squares, and 12 fewer white squares than green squares.  How many square feet is Brittany's comforter?",
        "answer": 68,
        "examples": [{'input': {'x1': 14, 'x2': 4, 'x3': 6, 'x4': 12}, 'output': 68}],
        });
    fs.writeFileSync('json/693.json', json);
}
doit();
