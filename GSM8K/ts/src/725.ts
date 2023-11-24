import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/725.json')) {
        console.log("Skipping 725")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('A cat eats nine sausages in {{x1}} minutes. A dog can eat the same number of sausages in 2/3 the amount of time the cat takes. Calculate the average time the two take the eat the sausages.', [], [{'input': {'x1': 30}, 'output': 25}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 30});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 25;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 725,
        "question": 'A cat eats nine sausages in 30 minutes. A dog can eat the same number of sausages in 2/3 the amount of time the cat takes. Calculate the average time the two take the eat the sausages.',
        "answer": 25,
        "examples": [{'input': {'x1': 30}, 'output': 25}],
        });
    fs.writeFileSync('json/725.json', json);
}
doit();
