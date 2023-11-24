import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/309.json')) {
        console.log("Skipping 309")
        return;
    }
    // measure time
    const f = define<number, {}>('Helena is a mad scientist testing her latest creation, the Lots-of-Limbs Serum. The serum will make the drinker grow an extra arm every three days and an extra leg every five days. After fifteen days, how many new limbs will Helena’s serum cause a person to grow if they drink it?', [], [{'input': {}, 'output': 8}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 8;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 309,
        "question": 'Helena is a mad scientist testing her latest creation, the Lots-of-Limbs Serum. The serum will make the drinker grow an extra arm every three days and an extra leg every five days. After fifteen days, how many new limbs will Helena’s serum cause a person to grow if they drink it?',
        "answer": 8,
        "examples": [{'input': {}, 'output': 8}],
        });
    fs.writeFileSync('json2/309.json', json);
}
doit();
