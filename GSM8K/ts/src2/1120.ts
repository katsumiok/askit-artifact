import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1120.json')) {
        console.log("Skipping 1120")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('John visits his parents twice a month.  It takes him {{x1}} hours to drive there at a speed of {{x2}} mph.  Considering the round trip, how many miles a month does he drive when visiting his parents?', [], [{'input': {'x1': 2, 'x2': 70}, 'output': 560}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2, 'x2': 70});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 560;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1120,
        "question": 'John visits his parents twice a month.  It takes him 2 hours to drive there at a speed of 70 mph.  Considering the round trip, how many miles a month does he drive when visiting his parents?',
        "answer": 560,
        "examples": [{'input': {'x1': 2, 'x2': 70}, 'output': 560}],
        });
    fs.writeFileSync('json2/1120.json', json);
}
doit();
