import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/192.json')) {
        console.log("Skipping 192")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Tom plants {{x1}} trees a year.  Every year he also chops down {{x2}} trees a year.  He starts with {{x3}} trees.  After {{x4}} years 30% of the trees die.  How many trees does he have left?', [], [{'input': {'x1': 10, 'x2': 2, 'x3': 50, 'x4': 10}, 'output': 91}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 10, 'x2': 2, 'x3': 50, 'x4': 10});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 91;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 192,
        "question": 'Tom plants 10 trees a year.  Every year he also chops down 2 trees a year.  He starts with 50 trees.  After 10 years 30% of the trees die.  How many trees does he have left?',
        "answer": 91,
        "examples": [{'input': {'x1': 10, 'x2': 2, 'x3': 50, 'x4': 10}, 'output': 91}],
        });
    fs.writeFileSync('json2/192.json', json);
}
doit();
