import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/480.json')) {
        console.log("Skipping 480")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Ben has {{x1}} tubes of blue paint and {{x2}} tubes of yellow paint. Jasper has half as many tubes of blue paint as Ben, and three times as many tubes of yellow paint as Ben. How many tubes of paint does Jasper have?', [], [{'input': {'x1': 4, 'x2': 3}, 'output': 11}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4, 'x2': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 11;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 480,
        "question": 'Ben has 4 tubes of blue paint and 3 tubes of yellow paint. Jasper has half as many tubes of blue paint as Ben, and three times as many tubes of yellow paint as Ben. How many tubes of paint does Jasper have?',
        "answer": 11,
        "examples": [{'input': {'x1': 4, 'x2': 3}, 'output': 11}],
        });
    fs.writeFileSync('json2/480.json', json);
}
doit();
