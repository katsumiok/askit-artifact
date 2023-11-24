import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1277.json')) {
        console.log("Skipping 1277")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>("Mia and Emma are currently {{x1}} years apart in age. If Mia, who is younger than Emma, is {{x2}} years old, what's the average of their ages?", [], [{'input': {'x1': 16, 'x2': 40}, 'output': 48}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 16, 'x2': 40});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 48;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1277,
        "question": "Mia and Emma are currently 16 years apart in age. If Mia, who is younger than Emma, is 40 years old, what's the average of their ages?",
        "answer": 48,
        "examples": [{'input': {'x1': 16, 'x2': 40}, 'output': 48}],
        });
    fs.writeFileSync('json/1277.json', json);
}
doit();
