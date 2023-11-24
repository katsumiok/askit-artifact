import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/212.json')) {
        console.log("Skipping 212")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Gary likes to walk around the edge of the local park, which is a rectangle that measures 1.5 miles by {{x1}} miles. If he walks at {{x2}} miles/hour, how many hours does he spend walking?', [], [{'input': {'x1': 6, 'x2': 3}, 'output': 5}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 6, 'x2': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 5;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 212,
        "question": 'Gary likes to walk around the edge of the local park, which is a rectangle that measures 1.5 miles by 6 miles. If he walks at 3 miles/hour, how many hours does he spend walking?',
        "answer": 5,
        "examples": [{'input': {'x1': 6, 'x2': 3}, 'output': 5}],
        });
    fs.writeFileSync('json2/212.json', json);
}
doit();
