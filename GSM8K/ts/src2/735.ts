import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/735.json')) {
        console.log("Skipping 735")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>("In a student council election, candidate A got 20% of the votes while candidate B got 50% more than candidate A's votes. The rest of the votes was given to candidate C. If there were {{x1}} voters, how many votes did candidate C get?", [], [{'input': {'x1': 100}, 'output': 50}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 100});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 50;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 735,
        "question": "In a student council election, candidate A got 20% of the votes while candidate B got 50% more than candidate A's votes. The rest of the votes was given to candidate C. If there were 100 voters, how many votes did candidate C get?",
        "answer": 50,
        "examples": [{'input': {'x1': 100}, 'output': 50}],
        });
    fs.writeFileSync('json2/735.json', json);
}
doit();
