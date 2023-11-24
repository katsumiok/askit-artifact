import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/386.json')) {
        console.log("Skipping 386")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>("To have the car for the weekend, Wilson's report card needs to show that he received {{x1}} or higher in his math class.  His math grade is calculated by the average of {{x2}} test scores.  On those tests, he received: 65, 94, 81, {{x3}} and 74.  What is his current math grade?", [], [{'input': {'x1': 80, 'x2': 5, 'x3': 86}, 'output': 80}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 80, 'x2': 5, 'x3': 86});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 80;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 386,
        "question": "To have the car for the weekend, Wilson's report card needs to show that he received 80 or higher in his math class.  His math grade is calculated by the average of 5 test scores.  On those tests, he received: 65, 94, 81, 86 and 74.  What is his current math grade?",
        "answer": 80,
        "examples": [{'input': {'x1': 80, 'x2': 5, 'x3': 86}, 'output': 80}],
        });
    fs.writeFileSync('json2/386.json', json);
}
doit();
