import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/222.json')) {
        console.log("Skipping 222")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Andy plants {{x1}} geraniums and {{x2}} fewer petunias that geraniums. How many flowers does he plant total?', [], [{'input': {'x1': 90, 'x2': 40}, 'output': 140}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 90, 'x2': 40});
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
        "id": 222,
        "question": 'Andy plants 90 geraniums and 40 fewer petunias that geraniums. How many flowers does he plant total?',
        "answer": 140,
        "examples": [{'input': {'x1': 90, 'x2': 40}, 'output': 140}],
        });
    fs.writeFileSync('json/222.json', json);
}
doit();
