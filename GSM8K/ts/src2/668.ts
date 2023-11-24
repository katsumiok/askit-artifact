import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/668.json')) {
        console.log("Skipping 668")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('In a company of {{x1}} employees, 20% of the employees are management.  Out of this 20%, only 30% oversee the entire company.  How many employees oversee the company?', [], [{'input': {'x1': 50}, 'output': 3}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 50});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 3;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 668,
        "question": 'In a company of 50 employees, 20% of the employees are management.  Out of this 20%, only 30% oversee the entire company.  How many employees oversee the company?',
        "answer": 3,
        "examples": [{'input': {'x1': 50}, 'output': 3}],
        });
    fs.writeFileSync('json2/668.json', json);
}
doit();
