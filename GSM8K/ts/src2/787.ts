import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/787.json')) {
        console.log("Skipping 787")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Samwell owns an appliances store. For this week, one-fourth of their sales are smart TVs, one-eighth are analog TVs, and the rest are OLED TVs. If they were able to sell a total of {{x1}} TVs, how many OLED TVs were they able to sell?', [], [{'input': {'x1': 40}, 'output': 25}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 40});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 25;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 787,
        "question": 'Samwell owns an appliances store. For this week, one-fourth of their sales are smart TVs, one-eighth are analog TVs, and the rest are OLED TVs. If they were able to sell a total of 40 TVs, how many OLED TVs were they able to sell?',
        "answer": 25,
        "examples": [{'input': {'x1': 40}, 'output': 25}],
        });
    fs.writeFileSync('json2/787.json', json);
}
doit();
