import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/653.json')) {
        console.log("Skipping 653")
        return;
    }
    // measure time
    const f = define<number, {}>('Sally has realized she did not receive a full wage this week. Her bank account, which held $200 at the start of the week, now holds $420. She has received no other money into her bank account this week. If her weekly wage should be $300, how many dollars were withheld from Sally’s wage?', [], [{'input': {}, 'output': 80}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 80;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 653,
        "question": 'Sally has realized she did not receive a full wage this week. Her bank account, which held $200 at the start of the week, now holds $420. She has received no other money into her bank account this week. If her weekly wage should be $300, how many dollars were withheld from Sally’s wage?',
        "answer": 80,
        "examples": [{'input': {}, 'output': 80}],
        });
    fs.writeFileSync('json/653.json', json);
}
doit();
