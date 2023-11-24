import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1304.json')) {
        console.log("Skipping 1304")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Norman High School enrolls an average of {{x1}} students every year. Butler High School, the neighboring school, enrolls an average of 3/4 as many students as Norman High School. How much greater is the average enrollment at Norman High School than the enrollment at Butler High School?', [], [{'input': {'x1': 4000}, 'output': 1000}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4000});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 1000;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1304,
        "question": 'Norman High School enrolls an average of 4000 students every year. Butler High School, the neighboring school, enrolls an average of 3/4 as many students as Norman High School. How much greater is the average enrollment at Norman High School than the enrollment at Butler High School?',
        "answer": 1000,
        "examples": [{'input': {'x1': 4000}, 'output': 1000}],
        });
    fs.writeFileSync('json/1304.json', json);
}
doit();
