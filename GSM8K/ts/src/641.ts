import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/641.json')) {
        console.log("Skipping 641")
        return;
    }
    // measure time
    const f = define<number, {}>("Tim gets a promotion that offers him a 5% raise on his $20000 a month salary.  It also gives him a bonus worth half a month's salary. How much money will he make in a year?", [], [{'input': {}, 'output': 262500}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 262500;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 641,
        "question": "Tim gets a promotion that offers him a 5% raise on his $20000 a month salary.  It also gives him a bonus worth half a month's salary. How much money will he make in a year?",
        "answer": 262500,
        "examples": [{'input': {}, 'output': 262500}],
        });
    fs.writeFileSync('json/641.json', json);
}
doit();
