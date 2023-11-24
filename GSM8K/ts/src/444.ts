import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/444.json')) {
        console.log("Skipping 444")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Movie A was one-fourth the length of Movie B. Movie B was {{x1}} minutes longer than Movie C. Movie C was 1.25 hours. How many minutes long was Movie A?', [], [{'input': {'x1': 5}, 'output': 20}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 20;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 444,
        "question": 'Movie A was one-fourth the length of Movie B. Movie B was 5 minutes longer than Movie C. Movie C was 1.25 hours. How many minutes long was Movie A?',
        "answer": 20,
        "examples": [{'input': {'x1': 5}, 'output': 20}],
        });
    fs.writeFileSync('json/444.json', json);
}
doit();
