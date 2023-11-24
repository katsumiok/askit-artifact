import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/804.json')) {
        console.log("Skipping 804")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Two cars are driving on a highway.  The first car is traveling at an average speed of {{x1}} miles per hour when the second car passes it at an average speed of {{x2}} miles per hour.  If both cars continue on the highway at the same speed, how many miles will separate them after {{x3}} hours?', [], [{'input': {'x1': 60, 'x2': 70, 'x3': 2}, 'output': 20}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 60, 'x2': 70, 'x3': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 20;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 804,
        "question": 'Two cars are driving on a highway.  The first car is traveling at an average speed of 60 miles per hour when the second car passes it at an average speed of 70 miles per hour.  If both cars continue on the highway at the same speed, how many miles will separate them after 2 hours?',
        "answer": 20,
        "examples": [{'input': {'x1': 60, 'x2': 70, 'x3': 2}, 'output': 20}],
        });
    fs.writeFileSync('json2/804.json', json);
}
doit();
