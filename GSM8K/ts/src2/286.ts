import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/286.json')) {
        console.log("Skipping 286")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Kelly has {{x1}} quarters and {{x2}} dimes. If she buys a can of pop for {{x3}} cents, how many cents will she have left?', [], [{'input': {'x1': 5, 'x2': 2, 'x3': 55}, 'output': 90}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5, 'x2': 2, 'x3': 55});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 90;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 286,
        "question": 'Kelly has 5 quarters and 2 dimes. If she buys a can of pop for 55 cents, how many cents will she have left?',
        "answer": 90,
        "examples": [{'input': {'x1': 5, 'x2': 2, 'x3': 55}, 'output': 90}],
        });
    fs.writeFileSync('json2/286.json', json);
}
doit();
