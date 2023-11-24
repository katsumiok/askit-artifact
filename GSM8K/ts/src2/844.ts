import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/844.json')) {
        console.log("Skipping 844")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Peter has twice as many socks as Jack and half times as many dishes as jack. Jack collected twice as many dishes as socks in the store. If jack collected {{x1}} dishes, calculate the total number of socks and dishes they have together?', [], [{'input': {'x1': 60}, 'output': 180}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 60});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 180;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 844,
        "question": 'Peter has twice as many socks as Jack and half times as many dishes as jack. Jack collected twice as many dishes as socks in the store. If jack collected 60 dishes, calculate the total number of socks and dishes they have together?',
        "answer": 180,
        "examples": [{'input': {'x1': 60}, 'output': 180}],
        });
    fs.writeFileSync('json2/844.json', json);
}
doit();
