import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/979.json')) {
        console.log("Skipping 979")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Emil is {{x1}} years old now. When he turns 24, he will be half the age of his dad but twice as old as his brother.  What is the sum of the ages of his dad and his brother now?', [], [{'input': {'x1': 19}, 'output': 50}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 19});
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
        "id": 979,
        "question": 'Emil is 19 years old now. When he turns 24, he will be half the age of his dad but twice as old as his brother.  What is the sum of the ages of his dad and his brother now?',
        "answer": 50,
        "examples": [{'input': {'x1': 19}, 'output': 50}],
        });
    fs.writeFileSync('json2/979.json', json);
}
doit();
