import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/666.json')) {
        console.log("Skipping 666")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Rayna has {{x1}} more dollars than Kassidy, and Kassidy has 3/4 times as much money as Aurelia. If Arelia has $120, how much would each have if they decided to add together their money and share equally among them?', [], [{'input': {'x1': 60}, 'output': 120}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 60});
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
        "id": 666,
        "question": 'Rayna has 60 more dollars than Kassidy, and Kassidy has 3/4 times as much money as Aurelia. If Arelia has $120, how much would each have if they decided to add together their money and share equally among them?',
        "answer": 120,
        "examples": [{'input': {'x1': 60}, 'output': 120}],
        });
    fs.writeFileSync('json/666.json', json);
}
doit();
