import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/543.json')) {
        console.log("Skipping 543")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('For each small task accomplished, Jairus gets $0.8 while Jenny gets $0.5. If each of them finished {{x1}} tasks, how much more will Jairus get than Jenny?', [], [{'input': {'x1': 20}, 'output': 6}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 20});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 6;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 543,
        "question": 'For each small task accomplished, Jairus gets $0.8 while Jenny gets $0.5. If each of them finished 20 tasks, how much more will Jairus get than Jenny?',
        "answer": 6,
        "examples": [{'input': {'x1': 20}, 'output': 6}],
        });
    fs.writeFileSync('json2/543.json', json);
}
doit();
