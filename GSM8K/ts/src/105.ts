import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/105.json')) {
        console.log("Skipping 105")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Cody eats three times as many cookies as Amir eats. If Amir eats {{x1}} cookies,\xa0how many cookies do both of them eat together?', [], [{'input': {'x1': 5}, 'output': 20}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 20;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 105,
        "question": 'Cody eats three times as many cookies as Amir eats. If Amir eats 5 cookies,\xa0how many cookies do both of them eat together?',
        "answer": 20,
        "examples": [{'input': {'x1': 5}, 'output': 20}],
        });
    fs.writeFileSync('json/105.json', json);
}
doit();
