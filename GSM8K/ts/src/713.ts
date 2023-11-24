import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/713.json')) {
        console.log("Skipping 713")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Mr Boarden is remodeling his bathroom. For every square foot, he needs {{x1}} mosaic tiles. How many mosaic tiles would Mr Boarden need to cover two thirds of his {{x2}} sq ft bathroom?', [], [{'input': {'x1': 24, 'x2': 36}, 'output': 576}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 24, 'x2': 36});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 576;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 713,
        "question": 'Mr Boarden is remodeling his bathroom. For every square foot, he needs 24 mosaic tiles. How many mosaic tiles would Mr Boarden need to cover two thirds of his 36 sq ft bathroom?',
        "answer": 576,
        "examples": [{'input': {'x1': 24, 'x2': 36}, 'output': 576}],
        });
    fs.writeFileSync('json/713.json', json);
}
doit();
