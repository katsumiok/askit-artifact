import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1200.json')) {
        console.log("Skipping 1200")
        return;
    }
    // measure time
    const f = define<number, {}>('Eight more than four times the number of coffee mugs in the teacher’s lounge is 40. How many coffee mugs are in the teacher’s lounge?', [], [{'input': {}, 'output': 8}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 8;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1200,
        "question": 'Eight more than four times the number of coffee mugs in the teacher’s lounge is 40. How many coffee mugs are in the teacher’s lounge?',
        "answer": 8,
        "examples": [{'input': {}, 'output': 8}],
        });
    fs.writeFileSync('json2/1200.json', json);
}
doit();
