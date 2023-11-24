import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/176.json')) {
        console.log("Skipping 176")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('In a race with {{x1}} Asians, {{x2}} were Japanese, and the rest were Chinese. If the number of boys on the Chinese team was 60, how many girls were on the Chinese team?', [], [{'input': {'x1': 240, 'x2': 80}, 'output': 100}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 240, 'x2': 80});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 100;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 176,
        "question": 'In a race with 240 Asians, 80 were Japanese, and the rest were Chinese. If the number of boys on the Chinese team was 60, how many girls were on the Chinese team?',
        "answer": 100,
        "examples": [{'input': {'x1': 240, 'x2': 80}, 'output': 100}],
        });
    fs.writeFileSync('json/176.json', json);
}
doit();
