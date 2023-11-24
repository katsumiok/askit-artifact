import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1315.json')) {
        console.log("Skipping 1315")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('There are some oranges in a basket. Ana spends {{x1}} minutes peeling an orange and Jane spends {{x2}} minutes doing the same. If Ana and Jane start picking oranges from this basket to peel at the same time, how many more oranges will Ana have peeled than Jane after an hour?', [], [{'input': {'x1': 3, 'x2': 4}, 'output': 5}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3, 'x2': 4});
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
        "id": 1315,
        "question": 'There are some oranges in a basket. Ana spends 3 minutes peeling an orange and Jane spends 4 minutes doing the same. If Ana and Jane start picking oranges from this basket to peel at the same time, how many more oranges will Ana have peeled than Jane after an hour?',
        "answer": 5,
        "examples": [{'input': {'x1': 3, 'x2': 4}, 'output': 5}],
        });
    fs.writeFileSync('json/1315.json', json);
}
doit();
