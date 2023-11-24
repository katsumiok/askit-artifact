import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/398.json')) {
        console.log("Skipping 398")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Nancy is cleaning out her old woodshed. She saw {{x1}} spiders, 1/3rd as many millipedes as spiders, and a number of stink bugs equal to twice the number of millipedes minus 12. How many bugs did she count total?', [], [{'input': {'x1': 90}, 'output': 168}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 90});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 168;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 398,
        "question": 'Nancy is cleaning out her old woodshed. She saw 90 spiders, 1/3rd as many millipedes as spiders, and a number of stink bugs equal to twice the number of millipedes minus 12. How many bugs did she count total?',
        "answer": 168,
        "examples": [{'input': {'x1': 90}, 'output': 168}],
        });
    fs.writeFileSync('json2/398.json', json);
}
doit();
