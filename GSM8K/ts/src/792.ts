import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/792.json')) {
        console.log("Skipping 792")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Damien created a currency based on bottle caps and got his friends to take part.  He finds {{x1}} bottle caps a day on his way home and each bottle cap is worth $.25.  How much money does he make in a {{x2}} day month?', [], [{'input': {'x1': 10, 'x2': 30}, 'output': 75}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 10, 'x2': 30});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 75;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 792,
        "question": 'Damien created a currency based on bottle caps and got his friends to take part.  He finds 10 bottle caps a day on his way home and each bottle cap is worth $.25.  How much money does he make in a 30 day month?',
        "answer": 75,
        "examples": [{'input': {'x1': 10, 'x2': 30}, 'output': 75}],
        });
    fs.writeFileSync('json/792.json', json);
}
doit();
