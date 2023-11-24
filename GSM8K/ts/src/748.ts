import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/748.json')) {
        console.log("Skipping 748")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Carl has four times as many marbles as Sean and Sean has half as many marbles as Cal. If Sean has {{x1}} marbles, how many marbles do Carl and Cal have combined?', [], [{'input': {'x1': 56}, 'output': 336}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 56});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 336;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 748,
        "question": 'Carl has four times as many marbles as Sean and Sean has half as many marbles as Cal. If Sean has 56 marbles, how many marbles do Carl and Cal have combined?',
        "answer": 336,
        "examples": [{'input': {'x1': 56}, 'output': 336}],
        });
    fs.writeFileSync('json/748.json', json);
}
doit();
