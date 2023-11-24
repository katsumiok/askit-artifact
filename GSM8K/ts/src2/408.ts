import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/408.json')) {
        console.log("Skipping 408")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number}>('Toby is reading a book that is {{x1}} pages long. It averages {{x2}} words a page. Toby can read at a rate of {{x3}} words per minute. He has to be at the airport in {{x4}} minutes and plans to leave as soon as he finishes the book. It takes {{x5}} minutes to get to the airport. How many minutes early will Toby be?', [], [{'input': {'x1': 45, 'x2': 200, 'x3': 300, 'x4': 60, 'x5': 10}, 'output': 20}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 45, 'x2': 200, 'x3': 300, 'x4': 60, 'x5': 10});
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
        "id": 408,
        "question": 'Toby is reading a book that is 45 pages long. It averages 200 words a page. Toby can read at a rate of 300 words per minute. He has to be at the airport in 60 minutes and plans to leave as soon as he finishes the book. It takes 10 minutes to get to the airport. How many minutes early will Toby be?',
        "answer": 20,
        "examples": [{'input': {'x1': 45, 'x2': 200, 'x3': 300, 'x4': 60, 'x5': 10}, 'output': 20}],
        });
    fs.writeFileSync('json2/408.json', json);
}
doit();
