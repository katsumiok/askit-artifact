import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1103.json')) {
        console.log("Skipping 1103")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('A jellyfish tank has numerous jellyfish in it. A fifth of the jellyfish are large, and a third of the large jellyfish change color from green to blue under UV light. The other jellyfish are small and always stay blue. When a UV light turned on, {{x1}} jellyfish changed color. How many jellyfish are in the tank?', [], [{'input': {'x1': 6}, 'output': 90}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 6});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 90;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1103,
        "question": 'A jellyfish tank has numerous jellyfish in it. A fifth of the jellyfish are large, and a third of the large jellyfish change color from green to blue under UV light. The other jellyfish are small and always stay blue. When a UV light turned on, 6 jellyfish changed color. How many jellyfish are in the tank?',
        "answer": 90,
        "examples": [{'input': {'x1': 6}, 'output': 90}],
        });
    fs.writeFileSync('json2/1103.json', json);
}
doit();
