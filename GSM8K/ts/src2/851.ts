import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/851.json')) {
        console.log("Skipping 851")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('James buys {{x1}} pairs of shoes a month.  He spends $2640 on shoes each year.  How much does he pay on average for each pair of shoes?', [], [{'input': {'x1': 2}, 'output': 110}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2});
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
        "id": 851,
        "question": 'James buys 2 pairs of shoes a month.  He spends $2640 on shoes each year.  How much does he pay on average for each pair of shoes?',
        "answer": 110,
        "examples": [{'input': {'x1': 2}, 'output': 110}],
        });
    fs.writeFileSync('json2/851.json', json);
}
doit();
