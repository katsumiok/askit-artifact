import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1049.json')) {
        console.log("Skipping 1049")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('There are {{x1}} books in a small library. Half of them are written in English, and 10% in German. All others are written in Spanish. How many Spanish books are there?', [], [{'input': {'x1': 50}, 'output': 20}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 50});
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
        "id": 1049,
        "question": 'There are 50 books in a small library. Half of them are written in English, and 10% in German. All others are written in Spanish. How many Spanish books are there?',
        "answer": 20,
        "examples": [{'input': {'x1': 50}, 'output': 20}],
        });
    fs.writeFileSync('json2/1049.json', json);
}
doit();
