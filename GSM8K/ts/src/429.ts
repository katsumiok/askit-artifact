import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/429.json')) {
        console.log("Skipping 429")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>("Indras has {{x1}} letters in her name. Her sister's name has {{x2}} more letters than half of the letters in Indras' name. How many letters are in Indras and her sister's names?", [], [{'input': {'x1': 6, 'x2': 4}, 'output': 13}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 6, 'x2': 4});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 13;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 429,
        "question": "Indras has 6 letters in her name. Her sister's name has 4 more letters than half of the letters in Indras' name. How many letters are in Indras and her sister's names?",
        "answer": 13,
        "examples": [{'input': {'x1': 6, 'x2': 4}, 'output': 13}],
        });
    fs.writeFileSync('json/429.json', json);
}
doit();
