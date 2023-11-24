import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/11.json')) {
        console.log("Skipping 11")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Toula went to the bakery and bought various types of pastries. She bought {{x1}} dozen donuts which cost $68 per dozen, {{x2}} dozen mini cupcakes which cost $80 per dozen, and {{x3}} dozen mini cheesecakes for $55 per dozen. How much was the total cost?', [], [{'input': {'x1': 3, 'x2': 2, 'x3': 6}, 'output': 694}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3, 'x2': 2, 'x3': 6});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 694;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 11,
        "question": 'Toula went to the bakery and bought various types of pastries. She bought 3 dozen donuts which cost $68 per dozen, 2 dozen mini cupcakes which cost $80 per dozen, and 6 dozen mini cheesecakes for $55 per dozen. How much was the total cost?',
        "answer": 694,
        "examples": [{'input': {'x1': 3, 'x2': 2, 'x3': 6}, 'output': 694}],
        });
    fs.writeFileSync('json/11.json', json);
}
doit();
