import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/367.json')) {
        console.log("Skipping 367")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('3 customers were kicked out of the Walmart for refusing to wear masks. A number equals to four times that many minus {{x1}} were kicked out for shoplifting.  Three times the number of shoplifters were kicked out for physical violence over goods on sale. If a total of {{x2}} people were kicked out of the Walmart, how many were kicked out for other reasons?', [], [{'input': {'x1': 5, 'x2': 50}, 'output': 19}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5, 'x2': 50});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 19;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 367,
        "question": '3 customers were kicked out of the Walmart for refusing to wear masks. A number equals to four times that many minus 5 were kicked out for shoplifting.  Three times the number of shoplifters were kicked out for physical violence over goods on sale. If a total of 50 people were kicked out of the Walmart, how many were kicked out for other reasons?',
        "answer": 19,
        "examples": [{'input': {'x1': 5, 'x2': 50}, 'output': 19}],
        });
    fs.writeFileSync('json/367.json', json);
}
doit();
