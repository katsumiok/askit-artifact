import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/477.json')) {
        console.log("Skipping 477")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>("Nine of the kids in Gina's class are allergic to dairy, {{x1}} are allergic to peanuts and {{x2}} are allergic to both. If there are {{x3}} kids in her class, how many aren't allergic to anything?", [], [{'input': {'x1': 6, 'x2': 3, 'x3': 32}, 'output': 20}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 6, 'x2': 3, 'x3': 32});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 20;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 477,
        "question": "Nine of the kids in Gina's class are allergic to dairy, 6 are allergic to peanuts and 3 are allergic to both. If there are 32 kids in her class, how many aren't allergic to anything?",
        "answer": 20,
        "examples": [{'input': {'x1': 6, 'x2': 3, 'x3': 32}, 'output': 20}],
        });
    fs.writeFileSync('json2/477.json', json);
}
doit();
