import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/800.json')) {
        console.log("Skipping 800")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Pierson scored {{x1}} points in one game of bowling. Nikita scored {{x2}} more than half as many as Pierson. How many points did Pierson and Nikita have in total?', [], [{'input': {'x1': 278, 'x2': 11}, 'output': 428}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 278, 'x2': 11});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 428;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 800,
        "question": 'Pierson scored 278 points in one game of bowling. Nikita scored 11 more than half as many as Pierson. How many points did Pierson and Nikita have in total?',
        "answer": 428,
        "examples": [{'input': {'x1': 278, 'x2': 11}, 'output': 428}],
        });
    fs.writeFileSync('json/800.json', json);
}
doit();
