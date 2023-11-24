import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/573.json')) {
        console.log("Skipping 573")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Katina has $3000 in her savings account. If she removes $100 from the account every month, how much money will be remaining within the account after {{x1}} years?', [], [{'input': {'x1': 2}, 'output': 600}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 600;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 573,
        "question": 'Katina has $3000 in her savings account. If she removes $100 from the account every month, how much money will be remaining within the account after 2 years?',
        "answer": 600,
        "examples": [{'input': {'x1': 2}, 'output': 600}],
        });
    fs.writeFileSync('json2/573.json', json);
}
doit();
