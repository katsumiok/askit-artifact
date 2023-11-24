import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/507.json')) {
        console.log("Skipping 507")
        return;
    }
    // measure time
    const f = define<number, {}>('Janet takes two bus trips five days a week. If each bus trip costs her $2.20, how much would she save by buying a weekly bus pass for $20?', [], [{'input': {}, 'output': 2}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 2;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 507,
        "question": 'Janet takes two bus trips five days a week. If each bus trip costs her $2.20, how much would she save by buying a weekly bus pass for $20?',
        "answer": 2,
        "examples": [{'input': {}, 'output': 2}],
        });
    fs.writeFileSync('json2/507.json', json);
}
doit();
