import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1189.json')) {
        console.log("Skipping 1189")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Doxa sliced an apple into {{x1}} pieces. She ate {{x2}} slice, her sister ate {{x3}} more than her, and her brother ate {{x4}} more than her sister. How many slices of apple did they all eat?', [], [{'input': {'x1': 8, 'x2': 1, 'x3': 1, 'x4': 1}, 'output': 6}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 8, 'x2': 1, 'x3': 1, 'x4': 1});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 6;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1189,
        "question": 'Doxa sliced an apple into 8 pieces. She ate 1 slice, her sister ate 1 more than her, and her brother ate 1 more than her sister. How many slices of apple did they all eat?',
        "answer": 6,
        "examples": [{'input': {'x1': 8, 'x2': 1, 'x3': 1, 'x4': 1}, 'output': 6}],
        });
    fs.writeFileSync('json/1189.json', json);
}
doit();
