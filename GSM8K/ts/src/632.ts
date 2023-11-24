import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/632.json')) {
        console.log("Skipping 632")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Max bought stamps at the post office. Some of the stamps had a snowflake design, some had a truck design, and some had a rose design. Max bought {{x1}} snowflake stamps. He bought {{x2}} more truck stamps than snowflake stamps, and {{x3}} fewer rose stamps than truck stamps. How many stamps did Max buy in all?', [], [{'input': {'x1': 16, 'x2': 3, 'x3': 9}, 'output': 45}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 16, 'x2': 3, 'x3': 9});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 45;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 632,
        "question": 'Max bought stamps at the post office. Some of the stamps had a snowflake design, some had a truck design, and some had a rose design. Max bought 16 snowflake stamps. He bought 3 more truck stamps than snowflake stamps, and 9 fewer rose stamps than truck stamps. How many stamps did Max buy in all?',
        "answer": 45,
        "examples": [{'input': {'x1': 16, 'x2': 3, 'x3': 9}, 'output': 45}],
        });
    fs.writeFileSync('json/632.json', json);
}
doit();
