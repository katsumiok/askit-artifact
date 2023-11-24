import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/710.json')) {
        console.log("Skipping 710")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>("Marcus ordered {{x1}} croissants at $3.00 apiece, {{x2}} cinnamon rolls at $2.50 each, {{x3}} mini quiches for $4.00 apiece and {{x4}} blueberry muffins that were $1.00 apiece.  At check out, Marcus shows his loyalty card that gives him 10% off of his purchase.  What is Marcus' total bill?", [], [{'input': {'x1': 5, 'x2': 4, 'x3': 3, 'x4': 13}, 'output': 45}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5, 'x2': 4, 'x3': 3, 'x4': 13});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 45;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 710,
        "question": "Marcus ordered 5 croissants at $3.00 apiece, 4 cinnamon rolls at $2.50 each, 3 mini quiches for $4.00 apiece and 13 blueberry muffins that were $1.00 apiece.  At check out, Marcus shows his loyalty card that gives him 10% off of his purchase.  What is Marcus' total bill?",
        "answer": 45,
        "examples": [{'input': {'x1': 5, 'x2': 4, 'x3': 3, 'x4': 13}, 'output': 45}],
        });
    fs.writeFileSync('json/710.json', json);
}
doit();
