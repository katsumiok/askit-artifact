import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1018.json')) {
        console.log("Skipping 1018")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('It takes James {{x1}} minutes to read {{x2}} pages of his book before he goes to bed. He reads {{x3}} pages of his book and then decides to go to sleep. How long does James spend reading, in minutes?', [], [{'input': {'x1': 10, 'x2': 3, 'x3': 18}, 'output': 60}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 10, 'x2': 3, 'x3': 18});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 60;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1018,
        "question": 'It takes James 10 minutes to read 3 pages of his book before he goes to bed. He reads 18 pages of his book and then decides to go to sleep. How long does James spend reading, in minutes?',
        "answer": 60,
        "examples": [{'input': {'x1': 10, 'x2': 3, 'x3': 18}, 'output': 60}],
        });
    fs.writeFileSync('json2/1018.json', json);
}
doit();
