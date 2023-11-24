import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/13.json')) {
        console.log("Skipping 13")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Melanie is a door-to-door saleswoman. She sold a third of her vacuum cleaners at the green house, {{x1}} more to the red house, and half of what was left at the orange house. If Melanie has {{x2}} vacuum cleaners left, how many did she start with?', [], [{'input': {'x1': 2, 'x2': 5}, 'output': 18}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2, 'x2': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 18;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 13,
        "question": 'Melanie is a door-to-door saleswoman. She sold a third of her vacuum cleaners at the green house, 2 more to the red house, and half of what was left at the orange house. If Melanie has 5 vacuum cleaners left, how many did she start with?',
        "answer": 18,
        "examples": [{'input': {'x1': 2, 'x2': 5}, 'output': 18}],
        });
    fs.writeFileSync('json2/13.json', json);
}
doit();
