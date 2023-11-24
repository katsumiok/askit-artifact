import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/230.json')) {
        console.log("Skipping 230")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Mark buys a fleet of {{x1}} cars for his company.  Each car sells for $20,000.  He pays 10% tax on the cars and then another $1000 for registration on each of them.  How much does he pay for everything?', [], [{'input': {'x1': 12}, 'output': 276000}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 12});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 276000;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 230,
        "question": 'Mark buys a fleet of 12 cars for his company.  Each car sells for $20,000.  He pays 10% tax on the cars and then another $1000 for registration on each of them.  How much does he pay for everything?',
        "answer": 276000,
        "examples": [{'input': {'x1': 12}, 'output': 276000}],
        });
    fs.writeFileSync('json2/230.json', json);
}
doit();
