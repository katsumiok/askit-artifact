import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/758.json')) {
        console.log("Skipping 758")
        return;
    }
    // measure time
    const f = define<number, {}>('A bag has a 5% discount. If it is marked $140, how much will you pay after the discount?', [], [{'input': {}, 'output': 133}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 133;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 758,
        "question": 'A bag has a 5% discount. If it is marked $140, how much will you pay after the discount?',
        "answer": 133,
        "examples": [{'input': {}, 'output': 133}],
        });
    fs.writeFileSync('json2/758.json', json);
}
doit();
