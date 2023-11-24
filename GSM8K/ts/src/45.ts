import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/45.json')) {
        console.log("Skipping 45")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Meredith is a freelance blogger who writes about health topics and submits to clients each day as her permanent job. A blog article takes an average of {{x1}} hours to research and write about. Last week, she wrote {{x2}} articles on Monday and  2/5 times more articles on Tuesday than on Monday. On Wednesday, she wrote twice the number of articles she wrote on Tuesday. Calculate the total number of hours she spent writing articles in the three days.', [], [{'input': {'x1': 4, 'x2': 5}, 'output': 104}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4, 'x2': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 104;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 45,
        "question": 'Meredith is a freelance blogger who writes about health topics and submits to clients each day as her permanent job. A blog article takes an average of 4 hours to research and write about. Last week, she wrote 5 articles on Monday and  2/5 times more articles on Tuesday than on Monday. On Wednesday, she wrote twice the number of articles she wrote on Tuesday. Calculate the total number of hours she spent writing articles in the three days.',
        "answer": 104,
        "examples": [{'input': {'x1': 4, 'x2': 5}, 'output': 104}],
        });
    fs.writeFileSync('json/45.json', json);
}
doit();
