import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/583.json')) {
        console.log("Skipping 583")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>("Judy bought a dozen cups and twice as many dishes as cups to take to the church's charity event. At the event, she found out that her friend had brought {{x1}} cups and {{x2}} more dishes than she had brought. What's the total number of utensils brought by the two?", [], [{'input': {'x1': 40, 'x2': 20}, 'output': 120}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 40, 'x2': 20});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 120;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 583,
        "question": "Judy bought a dozen cups and twice as many dishes as cups to take to the church's charity event. At the event, she found out that her friend had brought 40 cups and 20 more dishes than she had brought. What's the total number of utensils brought by the two?",
        "answer": 120,
        "examples": [{'input': {'x1': 40, 'x2': 20}, 'output': 120}],
        });
    fs.writeFileSync('json/583.json', json);
}
doit();
