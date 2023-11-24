import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/669.json')) {
        console.log("Skipping 669")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('For every muffin, Svetlana needed {{x1}} tablespoons of flour, {{x2}} tablespoons of sugar, and 0.25 of a tablespoon of salt. How many tablespoons of dry ingredients would Svetlana need to make {{x3}} muffins?', [], [{'input': {'x1': 5, 'x2': 3, 'x3': 16}, 'output': 132}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5, 'x2': 3, 'x3': 16});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 132;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 669,
        "question": 'For every muffin, Svetlana needed 5 tablespoons of flour, 3 tablespoons of sugar, and 0.25 of a tablespoon of salt. How many tablespoons of dry ingredients would Svetlana need to make 16 muffins?',
        "answer": 132,
        "examples": [{'input': {'x1': 5, 'x2': 3, 'x3': 16}, 'output': 132}],
        });
    fs.writeFileSync('json/669.json', json);
}
doit();
