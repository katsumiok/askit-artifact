import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/129.json')) {
        console.log("Skipping 129")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('A hospital sees {{x1}} people a day.  Each patient is seen for an average of {{x2}} minutes.  The doctors charge $150 an hour to the hospital and the hospital charges the patients $200 an hour.  How much profit does the hospital make from these visits?', [], [{'input': {'x1': 500, 'x2': 24}, 'output': 10000}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 500, 'x2': 24});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 10000;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 129,
        "question": 'A hospital sees 500 people a day.  Each patient is seen for an average of 24 minutes.  The doctors charge $150 an hour to the hospital and the hospital charges the patients $200 an hour.  How much profit does the hospital make from these visits?',
        "answer": 10000,
        "examples": [{'input': {'x1': 500, 'x2': 24}, 'output': 10000}],
        });
    fs.writeFileSync('json/129.json', json);
}
doit();
