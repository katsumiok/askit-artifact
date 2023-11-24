import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/433.json')) {
        console.log("Skipping 433")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('15 gallons of gas were equally divided into {{x1}} different containers. Josey needed 1/4 of a container to run her lawnmower. How many pints of gasoline did Josey need?', [], [{'input': {'x1': 5}, 'output': 6}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 6;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 433,
        "question": '15 gallons of gas were equally divided into 5 different containers. Josey needed 1/4 of a container to run her lawnmower. How many pints of gasoline did Josey need?',
        "answer": 6,
        "examples": [{'input': {'x1': 5}, 'output': 6}],
        });
    fs.writeFileSync('json2/433.json', json);
}
doit();
