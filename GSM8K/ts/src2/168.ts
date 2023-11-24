import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/168.json')) {
        console.log("Skipping 168")
        return;
    }
    // measure time
    const f = define<number, {}>('Jimmy has $2 more than twice the money Ethel has. If Ethal has $8, how much money is Jimmy having?', [], [{'input': {}, 'output': 18}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 18;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 168,
        "question": 'Jimmy has $2 more than twice the money Ethel has. If Ethal has $8, how much money is Jimmy having?',
        "answer": 18,
        "examples": [{'input': {}, 'output': 18}],
        });
    fs.writeFileSync('json2/168.json', json);
}
doit();
