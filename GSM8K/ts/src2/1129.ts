import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1129.json')) {
        console.log("Skipping 1129")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Arnold, Madeline, Camden, and Sarah painted {{x1}} easter eggs. Arnold and Madeline painted the same number of eggs. Camden and Sarah painted a total of {{x2}} eggs, but Camden painted {{x3}} more than Sarah. How many more eggs did Camden paint than Arnold?', [], [{'input': {'x1': 56, 'x2': 30, 'x3': 12}, 'output': 8}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 56, 'x2': 30, 'x3': 12});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 8;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1129,
        "question": 'Arnold, Madeline, Camden, and Sarah painted 56 easter eggs. Arnold and Madeline painted the same number of eggs. Camden and Sarah painted a total of 30 eggs, but Camden painted 12 more than Sarah. How many more eggs did Camden paint than Arnold?',
        "answer": 8,
        "examples": [{'input': {'x1': 56, 'x2': 30, 'x3': 12}, 'output': 8}],
        });
    fs.writeFileSync('json2/1129.json', json);
}
doit();
