import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/40.json')) {
        console.log("Skipping 40")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>("Brandon's iPhone is four times as old as Ben's iPhone. Ben's iPhone is two times older than Suzy's iPhone. If Suzy’s iPhone is {{x1}} year old, how old is Brandon’s iPhone?", [], [{'input': {'x1': 1}, 'output': 8}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 1});
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
        "id": 40,
        "question": "Brandon's iPhone is four times as old as Ben's iPhone. Ben's iPhone is two times older than Suzy's iPhone. If Suzy’s iPhone is 1 year old, how old is Brandon’s iPhone?",
        "answer": 8,
        "examples": [{'input': {'x1': 1}, 'output': 8}],
        });
    fs.writeFileSync('json2/40.json', json);
}
doit();
