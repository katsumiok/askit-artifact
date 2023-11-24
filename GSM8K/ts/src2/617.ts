import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/617.json')) {
        console.log("Skipping 617")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>("Prince is a butcher. He sells 15kg of meat every hour he works, and he works {{x1}} hours a day. His friend Bill gives him a bull that weighs 750kg. How many days will it take Prince to sell the meat from Bill's bull?", [], [{'input': {'x1': 10}, 'output': 5}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 10});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 5;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 617,
        "question": "Prince is a butcher. He sells 15kg of meat every hour he works, and he works 10 hours a day. His friend Bill gives him a bull that weighs 750kg. How many days will it take Prince to sell the meat from Bill's bull?",
        "answer": 5,
        "examples": [{'input': {'x1': 10}, 'output': 5}],
        });
    fs.writeFileSync('json2/617.json', json);
}
doit();
