import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/311.json')) {
        console.log("Skipping 311")
        return;
    }
    // measure time
    const f = define<number, {}>('In a family of 5, three people eat three eggs each day while the rest eat two eggs each day. If they eat eggs every day, how many eggs will the family consume in a week?', [], [{'input': {}, 'output': 91}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 91;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 311,
        "question": 'In a family of 5, three people eat three eggs each day while the rest eat two eggs each day. If they eat eggs every day, how many eggs will the family consume in a week?',
        "answer": 91,
        "examples": [{'input': {}, 'output': 91}],
        });
    fs.writeFileSync('json2/311.json', json);
}
doit();
