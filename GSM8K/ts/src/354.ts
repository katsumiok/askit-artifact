import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/354.json')) {
        console.log("Skipping 354")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Annabelle is saving for a phone that costs $400. She already has $80 in her savings. Her first job, where she earns $10 per hour, pays her for {{x1}} hours of work. She is also paid for {{x2}} hours of work at her second job, where she earns $5 an hour. In dollars, how much money does Annabelle still need to save?', [], [{'input': {'x1': 20, 'x2': 15}, 'output': 45}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 20, 'x2': 15});
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
        "id": 354,
        "question": 'Annabelle is saving for a phone that costs $400. She already has $80 in her savings. Her first job, where she earns $10 per hour, pays her for 20 hours of work. She is also paid for 15 hours of work at her second job, where she earns $5 an hour. In dollars, how much money does Annabelle still need to save?',
        "answer": 45,
        "examples": [{'input': {'x1': 20, 'x2': 15}, 'output': 45}],
        });
    fs.writeFileSync('json/354.json', json);
}
doit();
