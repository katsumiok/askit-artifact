import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/630.json')) {
        console.log("Skipping 630")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Tiffany is measuring how many surfers can ride a big wave without falling. She sees that when a wave over {{x1}} feet arrives, only 25% of the riders can stay upright. Of these riders, 60% are women. If there are {{x2}} riders, how many men can stay upright on the wave?', [], [{'input': {'x1': 30, 'x2': 100}, 'output': 10}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 30, 'x2': 100});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 10;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 630,
        "question": 'Tiffany is measuring how many surfers can ride a big wave without falling. She sees that when a wave over 30 feet arrives, only 25% of the riders can stay upright. Of these riders, 60% are women. If there are 100 riders, how many men can stay upright on the wave?',
        "answer": 10,
        "examples": [{'input': {'x1': 30, 'x2': 100}, 'output': 10}],
        });
    fs.writeFileSync('json2/630.json', json);
}
doit();
