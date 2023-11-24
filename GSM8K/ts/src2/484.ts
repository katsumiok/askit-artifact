import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/484.json')) {
        console.log("Skipping 484")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Stetson made a bet with Alec that he would give up $10 for each orange he eats. While at the farm, Stetson ate 2/5 of the oranges they picked. If they picked {{x1}} oranges, calculate the total amount of money Stetson gave up?', [], [{'input': {'x1': 60}, 'output': 240}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 60});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 240;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 484,
        "question": 'Stetson made a bet with Alec that he would give up $10 for each orange he eats. While at the farm, Stetson ate 2/5 of the oranges they picked. If they picked 60 oranges, calculate the total amount of money Stetson gave up?',
        "answer": 240,
        "examples": [{'input': {'x1': 60}, 'output': 240}],
        });
    fs.writeFileSync('json2/484.json', json);
}
doit();
