import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/142.json')) {
        console.log("Skipping 142")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Jordan plays video games for {{x1}} hours every day. He also has a part-time job where he earns $10 an hour. How much money would Jordan earn in one week if he spent his video game time working instead?', [], [{'input': {'x1': 2}, 'output': 140}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 140;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 142,
        "question": 'Jordan plays video games for 2 hours every day. He also has a part-time job where he earns $10 an hour. How much money would Jordan earn in one week if he spent his video game time working instead?',
        "answer": 140,
        "examples": [{'input': {'x1': 2}, 'output': 140}],
        });
    fs.writeFileSync('json/142.json', json);
}
doit();
