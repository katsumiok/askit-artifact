import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/854.json')) {
        console.log("Skipping 854")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('A local town is expanding and wants to build several new homes across the next three years. In the first year, they will build {{x1}} homes. In the next year, they will build three times this many homes. In the third year, they will count how many homes they have built and double the amount. How many homes will the town have built over the next three years?', [], [{'input': {'x1': 12}, 'output': 144}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 12});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 144;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 854,
        "question": 'A local town is expanding and wants to build several new homes across the next three years. In the first year, they will build 12 homes. In the next year, they will build three times this many homes. In the third year, they will count how many homes they have built and double the amount. How many homes will the town have built over the next three years?',
        "answer": 144,
        "examples": [{'input': {'x1': 12}, 'output': 144}],
        });
    fs.writeFileSync('json/854.json', json);
}
doit();
