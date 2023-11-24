import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/364.json')) {
        console.log("Skipping 364")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('There are {{x1}} fourth-graders at Small Tree  School. {{x2}} of them are girls. On Friday, {{x3}} fourth-grade girls and {{x4}} fourth-grade boys were absent. How many fourth grade boys were at Small Tree  School on Friday?', [], [{'input': {'x1': 96, 'x2': 43, 'x3': 5, 'x4': 4}, 'output': 49}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 96, 'x2': 43, 'x3': 5, 'x4': 4});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 49;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 364,
        "question": 'There are 96 fourth-graders at Small Tree  School. 43 of them are girls. On Friday, 5 fourth-grade girls and 4 fourth-grade boys were absent. How many fourth grade boys were at Small Tree  School on Friday?',
        "answer": 49,
        "examples": [{'input': {'x1': 96, 'x2': 43, 'x3': 5, 'x4': 4}, 'output': 49}],
        });
    fs.writeFileSync('json2/364.json', json);
}
doit();
