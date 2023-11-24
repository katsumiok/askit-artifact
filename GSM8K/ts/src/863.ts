import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/863.json')) {
        console.log("Skipping 863")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Gretchen has some coins. There are {{x1}} more gold coins than silver coins. If she had {{x2}} gold coins, how many coins did Gretchen have in total?', [], [{'input': {'x1': 30, 'x2': 70}, 'output': 110}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 30, 'x2': 70});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 110;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 863,
        "question": 'Gretchen has some coins. There are 30 more gold coins than silver coins. If she had 70 gold coins, how many coins did Gretchen have in total?',
        "answer": 110,
        "examples": [{'input': {'x1': 30, 'x2': 70}, 'output': 110}],
        });
    fs.writeFileSync('json/863.json', json);
}
doit();
