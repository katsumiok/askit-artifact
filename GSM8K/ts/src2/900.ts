import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/900.json')) {
        console.log("Skipping 900")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Denise and Daniel are reading the same book. Yesterday, Denise read {{x1}} pages while Daniel read {{x2}} pages. Today, Denise read {{x3}} more than as many pages as what Daniel read yesterday, while Daniel was not able to read any pages today. How many more pages did Denise read more than Daniel?', [], [{'input': {'x1': 10, 'x2': 13, 'x3': 5}, 'output': 15}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 10, 'x2': 13, 'x3': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 15;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 900,
        "question": 'Denise and Daniel are reading the same book. Yesterday, Denise read 10 pages while Daniel read 13 pages. Today, Denise read 5 more than as many pages as what Daniel read yesterday, while Daniel was not able to read any pages today. How many more pages did Denise read more than Daniel?',
        "answer": 15,
        "examples": [{'input': {'x1': 10, 'x2': 13, 'x3': 5}, 'output': 15}],
        });
    fs.writeFileSync('json2/900.json', json);
}
doit();
