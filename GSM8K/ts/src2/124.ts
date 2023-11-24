import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/124.json')) {
        console.log("Skipping 124")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>("Jennie is helping at her mom's office. She has a pile of {{x1}} letters needing stamps, and a pile of letters already stamped. She puts stamps on one-third of the letters needing stamps. If there are now {{x2}} letters in the pile of already-stamped letters, how many were in that pile when Jennie began?", [], [{'input': {'x1': 60, 'x2': 30}, 'output': 10}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 60, 'x2': 30});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 10;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 124,
        "question": "Jennie is helping at her mom's office. She has a pile of 60 letters needing stamps, and a pile of letters already stamped. She puts stamps on one-third of the letters needing stamps. If there are now 30 letters in the pile of already-stamped letters, how many were in that pile when Jennie began?",
        "answer": 10,
        "examples": [{'input': {'x1': 60, 'x2': 30}, 'output': 10}],
        });
    fs.writeFileSync('json2/124.json', json);
}
doit();
