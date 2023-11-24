import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1198.json')) {
        console.log("Skipping 1198")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('To participate in the local community tree-planting campaign, Mr. Julius planted twenty trees of White Oak and twice as many Lodgepole Pine as White Oak on his first day. On the second day, he planted {{x1}} more White Oak trees and 1/4 more Lodgepole Pine trees than he planted on the first day. Calculate the total number of trees planted by Mr. Julius in the two days.', [], [{'input': {'x1': 10}, 'output': 140}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 10});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 140;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1198,
        "question": 'To participate in the local community tree-planting campaign, Mr. Julius planted twenty trees of White Oak and twice as many Lodgepole Pine as White Oak on his first day. On the second day, he planted 10 more White Oak trees and 1/4 more Lodgepole Pine trees than he planted on the first day. Calculate the total number of trees planted by Mr. Julius in the two days.',
        "answer": 140,
        "examples": [{'input': {'x1': 10}, 'output': 140}],
        });
    fs.writeFileSync('json2/1198.json', json);
}
doit();
