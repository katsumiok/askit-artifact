import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/756.json')) {
        console.log("Skipping 756")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('A council met to vote on a new regulation. The vote passed with twice as many votes in favor of the new regulation as there were against it. If there are {{x1}} people on the council, what was the number of votes in favor of the new regulation?', [], [{'input': {'x1': 33}, 'output': 22}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 33});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 22;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 756,
        "question": 'A council met to vote on a new regulation. The vote passed with twice as many votes in favor of the new regulation as there were against it. If there are 33 people on the council, what was the number of votes in favor of the new regulation?',
        "answer": 22,
        "examples": [{'input': {'x1': 33}, 'output': 22}],
        });
    fs.writeFileSync('json2/756.json', json);
}
doit();
