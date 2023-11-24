import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/855.json')) {
        console.log("Skipping 855")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>("I am three years younger than my brother, and I am {{x1}} years older than my sister. My mom's age is one less than three times my brother's age. When you add all our ages, you get 87. How old am I?", [], [{'input': {'x1': 2}, 'output': 13}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 13;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 855,
        "question": "I am three years younger than my brother, and I am 2 years older than my sister. My mom's age is one less than three times my brother's age. When you add all our ages, you get 87. How old am I?",
        "answer": 13,
        "examples": [{'input': {'x1': 2}, 'output': 13}],
        });
    fs.writeFileSync('json2/855.json', json);
}
doit();
