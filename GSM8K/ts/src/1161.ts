import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1161.json')) {
        console.log("Skipping 1161")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Abraham owns {{x1}} square meters of unused land. He sold half of the land for $50, and after a month, he sold another 1/4 of his land for $30. He then sold the remaining land for $3 per square meter. How much money will he be able to earn after selling all his unused land?', [], [{'input': {'x1': 80}, 'output': 170}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 80});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 170;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1161,
        "question": 'Abraham owns 80 square meters of unused land. He sold half of the land for $50, and after a month, he sold another 1/4 of his land for $30. He then sold the remaining land for $3 per square meter. How much money will he be able to earn after selling all his unused land?',
        "answer": 170,
        "examples": [{'input': {'x1': 80}, 'output': 170}],
        });
    fs.writeFileSync('json/1161.json', json);
}
doit();
