import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/898.json')) {
        console.log("Skipping 898")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Dijana and Anis live near a lake, and every weekend they go out rowing into the lake. On a Sunday morning, both went out rowing, and Dijana rowed for {{x1}} miles the whole day. Anis rowed 1/5 times more miles than Dijana. Calculate the total distance the two of them rowed on that day.', [], [{'input': {'x1': 50}, 'output': 110}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 50});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 110;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 898,
        "question": 'Dijana and Anis live near a lake, and every weekend they go out rowing into the lake. On a Sunday morning, both went out rowing, and Dijana rowed for 50 miles the whole day. Anis rowed 1/5 times more miles than Dijana. Calculate the total distance the two of them rowed on that day.',
        "answer": 110,
        "examples": [{'input': {'x1': 50}, 'output': 110}],
        });
    fs.writeFileSync('json2/898.json', json);
}
doit();
