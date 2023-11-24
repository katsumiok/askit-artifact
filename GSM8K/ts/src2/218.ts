import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/218.json')) {
        console.log("Skipping 218")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>("Adrian's age is three times the age of Harriet, and Harriet is half the age of Zack. Calculate the average age of the three in three years if Harriet is {{x1}} years old now.", [], [{'input': {'x1': 21}, 'output': 45}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 21});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 45;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 218,
        "question": "Adrian's age is three times the age of Harriet, and Harriet is half the age of Zack. Calculate the average age of the three in three years if Harriet is 21 years old now.",
        "answer": 45,
        "examples": [{'input': {'x1': 21}, 'output': 45}],
        });
    fs.writeFileSync('json2/218.json', json);
}
doit();
