import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/487.json')) {
        console.log("Skipping 487")
        return;
    }
    // measure time
    const f = define<number, {}>('Uncle Ben has four horses. Each horse can consume five pounds of oats per meal. He feeds his horses twice a day. If one bag contains 50-pounds of oats,  how many bags of oats does he need to fed his horses for five days?', [], [{'input': {}, 'output': 4}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 4;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 487,
        "question": 'Uncle Ben has four horses. Each horse can consume five pounds of oats per meal. He feeds his horses twice a day. If one bag contains 50-pounds of oats,  how many bags of oats does he need to fed his horses for five days?',
        "answer": 4,
        "examples": [{'input': {}, 'output': 4}],
        });
    fs.writeFileSync('json2/487.json', json);
}
doit();
