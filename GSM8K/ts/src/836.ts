import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/836.json')) {
        console.log("Skipping 836")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Jada, Rory, and Kora make clay dishes to present as art for their school project. Jada makes twice as many clay dishes as Rory, while Rory makes {{x1}} more clay dishes than Kora. If Kora made {{x2}} dishes, how many clay dishes they all make together?', [], [{'input': {'x1': 20, 'x2': 20}, 'output': 140}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 20, 'x2': 20});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 140;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 836,
        "question": 'Jada, Rory, and Kora make clay dishes to present as art for their school project. Jada makes twice as many clay dishes as Rory, while Rory makes 20 more clay dishes than Kora. If Kora made 20 dishes, how many clay dishes they all make together?',
        "answer": 140,
        "examples": [{'input': {'x1': 20, 'x2': 20}, 'output': 140}],
        });
    fs.writeFileSync('json/836.json', json);
}
doit();
