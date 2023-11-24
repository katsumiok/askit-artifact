import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/370.json')) {
        console.log("Skipping 370")
        return;
    }
    // measure time
    const f = define<number, {}>('A hand-painted wallpaper costs $400 at the market. A DIY will saves 20% after considering the materials cost. If Ethan made his own hand-painted wallpaper, how much was the total cost?', [], [{'input': {}, 'output': 320}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 320;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 370,
        "question": 'A hand-painted wallpaper costs $400 at the market. A DIY will saves 20% after considering the materials cost. If Ethan made his own hand-painted wallpaper, how much was the total cost?',
        "answer": 320,
        "examples": [{'input': {}, 'output': 320}],
        });
    fs.writeFileSync('json2/370.json', json);
}
doit();
