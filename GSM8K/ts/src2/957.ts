import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/957.json')) {
        console.log("Skipping 957")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>("Shawna's father is five times as old as Shawna. Shawna is currently three times as old as Aliya. If Aliya is {{x1}} years old, how old is Shawna's father?", [], [{'input': {'x1': 3}, 'output': 45}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 45;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 957,
        "question": "Shawna's father is five times as old as Shawna. Shawna is currently three times as old as Aliya. If Aliya is 3 years old, how old is Shawna's father?",
        "answer": 45,
        "examples": [{'input': {'x1': 3}, 'output': 45}],
        });
    fs.writeFileSync('json2/957.json', json);
}
doit();
