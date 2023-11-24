import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/428.json')) {
        console.log("Skipping 428")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('A food caterer was told to prepare gourmet hot dogs for {{x1}} guests. While most people would only eat one hotdog, he prepared enough for half of the guests to be able to have two hotdogs. However, {{x2}} guests showed up, and everyone wanted a second hotdog. How many guests did not get a second hotdog?', [], [{'input': {'x1': 36, 'x2': 40}, 'output': 26}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 36, 'x2': 40});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 26;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 428,
        "question": 'A food caterer was told to prepare gourmet hot dogs for 36 guests. While most people would only eat one hotdog, he prepared enough for half of the guests to be able to have two hotdogs. However, 40 guests showed up, and everyone wanted a second hotdog. How many guests did not get a second hotdog?',
        "answer": 26,
        "examples": [{'input': {'x1': 36, 'x2': 40}, 'output': 26}],
        });
    fs.writeFileSync('json/428.json', json);
}
doit();
