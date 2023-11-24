import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/853.json')) {
        console.log("Skipping 853")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('There are {{x1}} rooms at the KozyInn Motel. It takes housekeeping {{x2}} minutes to clean each room. How many hours would it take to clean one-half of the rooms?', [], [{'input': {'x1': 90, 'x2': 20}, 'output': 15}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 90, 'x2': 20});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 15;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 853,
        "question": 'There are 90 rooms at the KozyInn Motel. It takes housekeeping 20 minutes to clean each room. How many hours would it take to clean one-half of the rooms?',
        "answer": 15,
        "examples": [{'input': {'x1': 90, 'x2': 20}, 'output': 15}],
        });
    fs.writeFileSync('json2/853.json', json);
}
doit();
