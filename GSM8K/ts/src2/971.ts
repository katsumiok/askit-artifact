import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/971.json')) {
        console.log("Skipping 971")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Robert is building a {{x1}} foot long, {{x2}} foot wide, rectangular wooden fence around his garden.  He needs {{x3}} wood slats for every foot of fencing he builds.  How many wooden slats will he need?', [], [{'input': {'x1': 15, 'x2': 10, 'x3': 2}, 'output': 100}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 15, 'x2': 10, 'x3': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 100;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 971,
        "question": 'Robert is building a 15 foot long, 10 foot wide, rectangular wooden fence around his garden.  He needs 2 wood slats for every foot of fencing he builds.  How many wooden slats will he need?',
        "answer": 100,
        "examples": [{'input': {'x1': 15, 'x2': 10, 'x3': 2}, 'output': 100}],
        });
    fs.writeFileSync('json2/971.json', json);
}
doit();
