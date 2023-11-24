import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/228.json')) {
        console.log("Skipping 228")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Kalinda is working on a {{x1}} piece puzzle with her mom. Kalinda can normally add {{x2}} pieces per minute. Her mom can typically place half as many pieces per minute as Kalinda.  How many hours will it take them to complete this puzzle?', [], [{'input': {'x1': 360, 'x2': 4}, 'output': 1}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 360, 'x2': 4});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 1;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 228,
        "question": 'Kalinda is working on a 360 piece puzzle with her mom. Kalinda can normally add 4 pieces per minute. Her mom can typically place half as many pieces per minute as Kalinda.  How many hours will it take them to complete this puzzle?',
        "answer": 1,
        "examples": [{'input': {'x1': 360, 'x2': 4}, 'output': 1}],
        });
    fs.writeFileSync('json/228.json', json);
}
doit();
