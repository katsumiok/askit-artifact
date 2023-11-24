import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1246.json')) {
        console.log("Skipping 1246")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Ara joined the school basketball team four years ago. She has been playing {{x1}} games every year. If her score for every game is {{x2}} points, calculate the total number of points she has scored in the four years.', [], [{'input': {'x1': 40, 'x2': 21}, 'output': 3360}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 40, 'x2': 21});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 3360;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1246,
        "question": 'Ara joined the school basketball team four years ago. She has been playing 40 games every year. If her score for every game is 21 points, calculate the total number of points she has scored in the four years.',
        "answer": 3360,
        "examples": [{'input': {'x1': 40, 'x2': 21}, 'output': 3360}],
        });
    fs.writeFileSync('json2/1246.json', json);
}
doit();
