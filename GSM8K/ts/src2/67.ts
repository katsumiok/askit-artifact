import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/67.json')) {
        console.log("Skipping 67")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('A treasure hunter found a buried treasure chest filled with gems. There were {{x1}} diamonds, {{x2}} fewer rubies than diamonds, and twice the number of emeralds than the rubies.   How many of the gems were there in the chest?', [], [{'input': {'x1': 175, 'x2': 35}, 'output': 595}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 175, 'x2': 35});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 595;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 67,
        "question": 'A treasure hunter found a buried treasure chest filled with gems. There were 175 diamonds, 35 fewer rubies than diamonds, and twice the number of emeralds than the rubies.   How many of the gems were there in the chest?',
        "answer": 595,
        "examples": [{'input': {'x1': 175, 'x2': 35}, 'output': 595}],
        });
    fs.writeFileSync('json2/67.json', json);
}
doit();
