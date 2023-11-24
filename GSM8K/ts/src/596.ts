import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/596.json')) {
        console.log("Skipping 596")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('George needs to pay for dental work. He needs {{x1}} implants. Each implant has a base price of $2000. For one of the implants, he wants a crown made of porcelain. That feature costs an extra $500. He’s already put down a deposit of $600. He makes $15 per hour at work. How many hours does he need to work before he has enough to pay for the dental work?', [], [{'input': {'x1': 2}, 'output': 260}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 260;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 596,
        "question": 'George needs to pay for dental work. He needs 2 implants. Each implant has a base price of $2000. For one of the implants, he wants a crown made of porcelain. That feature costs an extra $500. He’s already put down a deposit of $600. He makes $15 per hour at work. How many hours does he need to work before he has enough to pay for the dental work?',
        "answer": 260,
        "examples": [{'input': {'x1': 2}, 'output': 260}],
        });
    fs.writeFileSync('json/596.json', json);
}
doit();
