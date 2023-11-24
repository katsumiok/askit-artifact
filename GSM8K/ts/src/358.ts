import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/358.json')) {
        console.log("Skipping 358")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Marisa gets $5 as pocket money every day from her parents. She buys {{x1}} lollipops worth {{x2}} cents each every day and saves the change in her piggy bank. How much money does she put in her piggy bank if she saves for {{x3}} days?', [], [{'input': {'x1': 4, 'x2': 25, 'x3': 5}, 'output': 20}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4, 'x2': 25, 'x3': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 20;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 358,
        "question": 'Marisa gets $5 as pocket money every day from her parents. She buys 4 lollipops worth 25 cents each every day and saves the change in her piggy bank. How much money does she put in her piggy bank if she saves for 5 days?',
        "answer": 20,
        "examples": [{'input': {'x1': 4, 'x2': 25, 'x3': 5}, 'output': 20}],
        });
    fs.writeFileSync('json/358.json', json);
}
doit();
