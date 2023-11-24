import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/338.json')) {
        console.log("Skipping 338")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('A class of {{x1}} students is split into {{x2}} groups such that {{x3}} of them are equal in number and the last one (which is the smallest) is {{x4}} less than each of the other groups. How many students are in this (smallest) group?', [], [{'input': {'x1': 200, 'x2': 3, 'x3': 2, 'x4': 10}, 'output': 60}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 200, 'x2': 3, 'x3': 2, 'x4': 10});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 60;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 338,
        "question": 'A class of 200 students is split into 3 groups such that 2 of them are equal in number and the last one (which is the smallest) is 10 less than each of the other groups. How many students are in this (smallest) group?',
        "answer": 60,
        "examples": [{'input': {'x1': 200, 'x2': 3, 'x3': 2, 'x4': 10}, 'output': 60}],
        });
    fs.writeFileSync('json2/338.json', json);
}
doit();
