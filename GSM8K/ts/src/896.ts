import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/896.json')) {
        console.log("Skipping 896")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('John rents his car out {{x1}} times a month for {{x2}} hours each time.  He gets paid $25 an hour.  If his car payment is $500, how much profit does he make on his car?', [], [{'input': {'x1': 10, 'x2': 3}, 'output': 250}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 10, 'x2': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 250;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 896,
        "question": 'John rents his car out 10 times a month for 3 hours each time.  He gets paid $25 an hour.  If his car payment is $500, how much profit does he make on his car?',
        "answer": 250,
        "examples": [{'input': {'x1': 10, 'x2': 3}, 'output': 250}],
        });
    fs.writeFileSync('json/896.json', json);
}
doit();
