import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/34.json')) {
        console.log("Skipping 34")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>("Siobhan has {{x1}} fewer jewels than Aaron. Aaron has {{x2}} more jewels than half of Raymond's jewels. If Raymond has {{x3}} jewels, how many jewels does Siobhan have?", [], [{'input': {'x1': 2, 'x2': 5, 'x3': 40}, 'output': 23}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2, 'x2': 5, 'x3': 40});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 23;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 34,
        "question": "Siobhan has 2 fewer jewels than Aaron. Aaron has 5 more jewels than half of Raymond's jewels. If Raymond has 40 jewels, how many jewels does Siobhan have?",
        "answer": 23,
        "examples": [{'input': {'x1': 2, 'x2': 5, 'x3': 40}, 'output': 23}],
        });
    fs.writeFileSync('json/34.json', json);
}
doit();
