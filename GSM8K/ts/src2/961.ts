import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/961.json')) {
        console.log("Skipping 961")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Amora, Lainey, and Collins wanted to share corn chips equally but then realized only two people would get an equal amount of corn chips, while the other person would receive {{x1}} more corn chips than the number the others got. If Amora and Lainey got {{x2}} corn chips each, how many corn chips were there altogether?', [], [{'input': {'x1': 15, 'x2': 70}, 'output': 225}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 15, 'x2': 70});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 225;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 961,
        "question": 'Amora, Lainey, and Collins wanted to share corn chips equally but then realized only two people would get an equal amount of corn chips, while the other person would receive 15 more corn chips than the number the others got. If Amora and Lainey got 70 corn chips each, how many corn chips were there altogether?',
        "answer": 225,
        "examples": [{'input': {'x1': 15, 'x2': 70}, 'output': 225}],
        });
    fs.writeFileSync('json2/961.json', json);
}
doit();
