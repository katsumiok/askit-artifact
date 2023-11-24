import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1109.json')) {
        console.log("Skipping 1109")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Three of the women at the cocktail party are wearing {{x1}} inch heels and three are wearing {{x2}} inch heels. What is the average height of heels at this party?', [], [{'input': {'x1': 4, 'x2': 2}, 'output': 3}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4, 'x2': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 3;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1109,
        "question": 'Three of the women at the cocktail party are wearing 4 inch heels and three are wearing 2 inch heels. What is the average height of heels at this party?',
        "answer": 3,
        "examples": [{'input': {'x1': 4, 'x2': 2}, 'output': 3}],
        });
    fs.writeFileSync('json/1109.json', json);
}
doit();
