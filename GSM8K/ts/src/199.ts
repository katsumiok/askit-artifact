import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/199.json')) {
        console.log("Skipping 199")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Mark is a copy-editor. He edits an equal number of sentences each week for two different publishers, who each pay him a different rate per sentence. Publisher B pays Mark twice what Publisher A pays. Mark edits a total number of {{x1}} sentences each week, and Publisher A pays him {{x2}} cents per sentence. How much does Mark make in a week, in cents?', [], [{'input': {'x1': 1000, 'x2': 5}, 'output': 7500}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 1000, 'x2': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 7500;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 199,
        "question": 'Mark is a copy-editor. He edits an equal number of sentences each week for two different publishers, who each pay him a different rate per sentence. Publisher B pays Mark twice what Publisher A pays. Mark edits a total number of 1000 sentences each week, and Publisher A pays him 5 cents per sentence. How much does Mark make in a week, in cents?',
        "answer": 7500,
        "examples": [{'input': {'x1': 1000, 'x2': 5}, 'output': 7500}],
        });
    fs.writeFileSync('json/199.json', json);
}
doit();
