import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/934.json')) {
        console.log("Skipping 934")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>("Zoey and Sydney are having a watermelon seed spitting contest. Whoever spits their seeds the most total distance wins. They each get one watermelon. Zoey's has {{x1}} seeds and she spits each one {{x2}} feet. Sydney's has {{x3}} she spits each one {{x4}} feet. What is the average total distance spat?", [], [{'input': {'x1': 40, 'x2': 10, 'x3': 35, 'x4': 12}, 'output': 410}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 40, 'x2': 10, 'x3': 35, 'x4': 12});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 410;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 934,
        "question": "Zoey and Sydney are having a watermelon seed spitting contest. Whoever spits their seeds the most total distance wins. They each get one watermelon. Zoey's has 40 seeds and she spits each one 10 feet. Sydney's has 35 she spits each one 12 feet. What is the average total distance spat?",
        "answer": 410,
        "examples": [{'input': {'x1': 40, 'x2': 10, 'x3': 35, 'x4': 12}, 'output': 410}],
        });
    fs.writeFileSync('json/934.json', json);
}
doit();
