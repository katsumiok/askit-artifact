import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/755.json')) {
        console.log("Skipping 755")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Joey plays football every week. Last week he played {{x1}} matches on Monday, {{x2}} match on Friday, and on Saturday he played double the number of matches he played on Monday. How many matches did Joey play in one week?', [], [{'input': {'x1': 2, 'x2': 1}, 'output': 7}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2, 'x2': 1});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 7;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 755,
        "question": 'Joey plays football every week. Last week he played 2 matches on Monday, 1 match on Friday, and on Saturday he played double the number of matches he played on Monday. How many matches did Joey play in one week?',
        "answer": 7,
        "examples": [{'input': {'x1': 2, 'x2': 1}, 'output': 7}],
        });
    fs.writeFileSync('json2/755.json', json);
}
doit();
