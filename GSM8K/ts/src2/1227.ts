import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1227.json')) {
        console.log("Skipping 1227")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number, x6: number}>('Susan orders {{x1}} magazines that send {{x2}} issues a year.  She has {{x3}} magazine that sends {{x4}} issues a year.  Her last magazine sends her {{x5}} times the amount of the {{x6}} issue magazine.  How many magazines does she get every year?', [], [{'input': {'x1': 3, 'x2': 12, 'x3': 1, 'x4': 6, 'x5': 4, 'x6': 6}, 'output': 66}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3, 'x2': 12, 'x3': 1, 'x4': 6, 'x5': 4, 'x6': 6});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 66;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1227,
        "question": 'Susan orders 3 magazines that send 12 issues a year.  She has 1 magazine that sends 6 issues a year.  Her last magazine sends her 4 times the amount of the 6 issue magazine.  How many magazines does she get every year?',
        "answer": 66,
        "examples": [{'input': {'x1': 3, 'x2': 12, 'x3': 1, 'x4': 6, 'x5': 4, 'x6': 6}, 'output': 66}],
        });
    fs.writeFileSync('json2/1227.json', json);
}
doit();
