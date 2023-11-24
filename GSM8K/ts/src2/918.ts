import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/918.json')) {
        console.log("Skipping 918")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('There are {{x1}} students playing tennis and twice that number playing volleyball. There are {{x2}} boys and {{x3}} girls playing soccer. If each student only participates in one group, how many students are there in total?', [], [{'input': {'x1': 6, 'x2': 16, 'x3': 22}, 'output': 56}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 6, 'x2': 16, 'x3': 22});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 56;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 918,
        "question": 'There are 6 students playing tennis and twice that number playing volleyball. There are 16 boys and 22 girls playing soccer. If each student only participates in one group, how many students are there in total?',
        "answer": 56,
        "examples": [{'input': {'x1': 6, 'x2': 16, 'x3': 22}, 'output': 56}],
        });
    fs.writeFileSync('json2/918.json', json);
}
doit();
