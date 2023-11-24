import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/404.json')) {
        console.log("Skipping 404")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Jane counts two zebras with {{x1}} stripes each, a zebra with {{x2}} stripes, and another zebra with half that many stripes. How many stripes do the zebras have on average?', [], [{'input': {'x1': 17, 'x2': 36}, 'output': 22}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 17, 'x2': 36});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 22;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 404,
        "question": 'Jane counts two zebras with 17 stripes each, a zebra with 36 stripes, and another zebra with half that many stripes. How many stripes do the zebras have on average?',
        "answer": 22,
        "examples": [{'input': {'x1': 17, 'x2': 36}, 'output': 22}],
        });
    fs.writeFileSync('json/404.json', json);
}
doit();
