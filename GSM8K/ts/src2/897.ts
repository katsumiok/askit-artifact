import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/897.json')) {
        console.log("Skipping 897")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Joseph had {{x1}} times as many notebooks as Martha. Martha decided she needed more notebooks and then bought {{x2}} more for a total of {{x3}} notebooks. How many more than Joseph does she now have?', [], [{'input': {'x1': 3, 'x2': 5, 'x3': 7}, 'output': 1}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3, 'x2': 5, 'x3': 7});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 1;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 897,
        "question": 'Joseph had 3 times as many notebooks as Martha. Martha decided she needed more notebooks and then bought 5 more for a total of 7 notebooks. How many more than Joseph does she now have?',
        "answer": 1,
        "examples": [{'input': {'x1': 3, 'x2': 5, 'x3': 7}, 'output': 1}],
        });
    fs.writeFileSync('json2/897.json', json);
}
doit();
