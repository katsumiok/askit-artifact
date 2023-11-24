import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1223.json')) {
        console.log("Skipping 1223")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('To make a call from a payphone, you must pay $0.25 for each minute of your call. After {{x1}} minutes, that price drops to $0.2 per minute. How much would a 36-minute call cost?', [], [{'input': {'x1': 16}, 'output': 8}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 16});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 8;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1223,
        "question": 'To make a call from a payphone, you must pay $0.25 for each minute of your call. After 16 minutes, that price drops to $0.2 per minute. How much would a 36-minute call cost?',
        "answer": 8,
        "examples": [{'input': {'x1': 16}, 'output': 8}],
        });
    fs.writeFileSync('json/1223.json', json);
}
doit();
