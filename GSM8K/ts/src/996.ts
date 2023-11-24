import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/996.json')) {
        console.log("Skipping 996")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Four children are playing together—Akbar, Alessandro, Helene, and Wilfred. Helene is twice as old as the average age of the group, and the total age of the children is 20. If Akbar is {{x1}} years old and Alessandro is {{x2}} years old, calculate the age of Wilfred.', [], [{'input': {'x1': 3, 'x2': 4}, 'output': 3}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3, 'x2': 4});
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
        "id": 996,
        "question": 'Four children are playing together—Akbar, Alessandro, Helene, and Wilfred. Helene is twice as old as the average age of the group, and the total age of the children is 20. If Akbar is 3 years old and Alessandro is 4 years old, calculate the age of Wilfred.',
        "answer": 3,
        "examples": [{'input': {'x1': 3, 'x2': 4}, 'output': 3}],
        });
    fs.writeFileSync('json/996.json', json);
}
doit();
