import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/182.json')) {
        console.log("Skipping 182")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>("Jean is two years older than Mark.  Two years ago Mark was {{x1}} years older than half Jan's age.  If Jan is {{x2}} how old is Jean?", [], [{'input': {'x1': 5, 'x2': 30}, 'output': 23}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5, 'x2': 30});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 23;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 182,
        "question": "Jean is two years older than Mark.  Two years ago Mark was 5 years older than half Jan's age.  If Jan is 30 how old is Jean?",
        "answer": 23,
        "examples": [{'input': {'x1': 5, 'x2': 30}, 'output': 23}],
        });
    fs.writeFileSync('json2/182.json', json);
}
doit();
