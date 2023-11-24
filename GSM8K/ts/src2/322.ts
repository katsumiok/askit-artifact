import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/322.json')) {
        console.log("Skipping 322")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Jam has three boxes full of pencils and {{x1}} loose pencils which give a total of {{x2}} pencils. If her sister, Meg, has {{x3}} pencils, how many boxes do Jam and Meg need to store all their pencils?', [], [{'input': {'x1': 2, 'x2': 26, 'x3': 46}, 'output': 9}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2, 'x2': 26, 'x3': 46});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 9;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 322,
        "question": 'Jam has three boxes full of pencils and 2 loose pencils which give a total of 26 pencils. If her sister, Meg, has 46 pencils, how many boxes do Jam and Meg need to store all their pencils?',
        "answer": 9,
        "examples": [{'input': {'x1': 2, 'x2': 26, 'x3': 46}, 'output': 9}],
        });
    fs.writeFileSync('json2/322.json', json);
}
doit();
