import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1308.json')) {
        console.log("Skipping 1308")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('If there are {{x1}} eggs in a basket, and there are twice as many eggs in a second basket, how many eggs are in both baskets put together?', [], [{'input': {'x1': 10}, 'output': 30}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 10});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 30;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1308,
        "question": 'If there are 10 eggs in a basket, and there are twice as many eggs in a second basket, how many eggs are in both baskets put together?',
        "answer": 30,
        "examples": [{'input': {'x1': 10}, 'output': 30}],
        });
    fs.writeFileSync('json/1308.json', json);
}
doit();
