import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/951.json')) {
        console.log("Skipping 951")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('The book is printed on paper that, when stacked, is {{x1}} pages to the inch. Each paper is printed on both sides, with one page of the book printed on each side. How many pages are in the book, if it is 1.5 inches thick?', [], [{'input': {'x1': 100}, 'output': 300}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 100});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 300;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 951,
        "question": 'The book is printed on paper that, when stacked, is 100 pages to the inch. Each paper is printed on both sides, with one page of the book printed on each side. How many pages are in the book, if it is 1.5 inches thick?',
        "answer": 300,
        "examples": [{'input': {'x1': 100}, 'output': 300}],
        });
    fs.writeFileSync('json/951.json', json);
}
doit();
