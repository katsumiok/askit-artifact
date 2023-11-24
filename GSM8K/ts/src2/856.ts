import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/856.json')) {
        console.log("Skipping 856")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Mr. Jackson’s fourth-grade class has {{x1}} students. He wants to give each student {{x2}} glue sticks. The glue sticks come in packs of 8. How many packs will Mr. Jackson need to buy so every student can have {{x3}} glue sticks, assuming he can only buy whole packs and he expects to have some extra glue sticks left over?', [], [{'input': {'x1': 27, 'x2': 2, 'x3': 2}, 'output': 7}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 27, 'x2': 2, 'x3': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 7;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 856,
        "question": 'Mr. Jackson’s fourth-grade class has 27 students. He wants to give each student 2 glue sticks. The glue sticks come in packs of 8. How many packs will Mr. Jackson need to buy so every student can have 2 glue sticks, assuming he can only buy whole packs and he expects to have some extra glue sticks left over?',
        "answer": 7,
        "examples": [{'input': {'x1': 27, 'x2': 2, 'x3': 2}, 'output': 7}],
        });
    fs.writeFileSync('json2/856.json', json);
}
doit();
