import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/421.json')) {
        console.log("Skipping 421")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>("There were {{x1}} cats on a rock. Four boats came and carried away {{x2}} cats each, and later, 3/5 of the remaining cats ran after a mouse they'd seen. How many cats were left on the rock?", [], [{'input': {'x1': 50, 'x2': 5}, 'output': 12}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 50, 'x2': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 12;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 421,
        "question": "There were 50 cats on a rock. Four boats came and carried away 5 cats each, and later, 3/5 of the remaining cats ran after a mouse they'd seen. How many cats were left on the rock?",
        "answer": 12,
        "examples": [{'input': {'x1': 50, 'x2': 5}, 'output': 12}],
        });
    fs.writeFileSync('json/421.json', json);
}
doit();
