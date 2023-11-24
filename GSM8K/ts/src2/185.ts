import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/185.json')) {
        console.log("Skipping 185")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Jenna and her mother picked some apples from their apple farm. Jenna picked half as many apples as her mom. If her mom got {{x1}} apples, how many apples did they both pick?', [], [{'input': {'x1': 20}, 'output': 30}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 20});
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
        "id": 185,
        "question": 'Jenna and her mother picked some apples from their apple farm. Jenna picked half as many apples as her mom. If her mom got 20 apples, how many apples did they both pick?',
        "answer": 30,
        "examples": [{'input': {'x1': 20}, 'output': 30}],
        });
    fs.writeFileSync('json2/185.json', json);
}
doit();
