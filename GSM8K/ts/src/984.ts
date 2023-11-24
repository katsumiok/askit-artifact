import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/984.json')) {
        console.log("Skipping 984")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>("Pat has a flower bed that is {{x1}} feet long.  Pat wants to fill her flower bed with plants.  Pat's flowers grow {{x2}} inches wide so she needs to leave 1.5 feet between every plant.  Pat already owns {{x3}} flowers.  Each flowering plant costs $6 at the store,  how much money will Pat spend at the store to fill up her flower bed?", [], [{'input': {'x1': 111, 'x2': 12, 'x3': 17}, 'output': 342}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 111, 'x2': 12, 'x3': 17});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 342;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 984,
        "question": "Pat has a flower bed that is 111 feet long.  Pat wants to fill her flower bed with plants.  Pat's flowers grow 12 inches wide so she needs to leave 1.5 feet between every plant.  Pat already owns 17 flowers.  Each flowering plant costs $6 at the store,  how much money will Pat spend at the store to fill up her flower bed?",
        "answer": 342,
        "examples": [{'input': {'x1': 111, 'x2': 12, 'x3': 17}, 'output': 342}],
        });
    fs.writeFileSync('json/984.json', json);
}
doit();
