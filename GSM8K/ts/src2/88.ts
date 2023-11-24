import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/88.json')) {
        console.log("Skipping 88")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>("Marilyn's first record sold {{x1}} times as many copies as Harald's. If they sold 88,000 copies combined, how many copies did Harald sell?", [], [{'input': {'x1': 10}, 'output': 8000}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 10});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 8000;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 88,
        "question": "Marilyn's first record sold 10 times as many copies as Harald's. If they sold 88,000 copies combined, how many copies did Harald sell?",
        "answer": 8000,
        "examples": [{'input': {'x1': 10}, 'output': 8000}],
        });
    fs.writeFileSync('json2/88.json', json);
}
doit();
