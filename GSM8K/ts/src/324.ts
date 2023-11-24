import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/324.json')) {
        console.log("Skipping 324")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number}>('Ralph has a record store where people can trade their own records for new ones. People can trade {{x1}} old records for {{x2}} new one. {{x3}} people come in with old records and leave with {{x4}} new records between them. How many old records did the {{x5}} people bring in?', [], [{'input': {'x1': 2, 'x2': 1, 'x3': 5, 'x4': 7, 'x5': 5}, 'output': 14}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2, 'x2': 1, 'x3': 5, 'x4': 7, 'x5': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 14;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 324,
        "question": 'Ralph has a record store where people can trade their own records for new ones. People can trade 2 old records for 1 new one. 5 people come in with old records and leave with 7 new records between them. How many old records did the 5 people bring in?',
        "answer": 14,
        "examples": [{'input': {'x1': 2, 'x2': 1, 'x3': 5, 'x4': 7, 'x5': 5}, 'output': 14}],
        });
    fs.writeFileSync('json/324.json', json);
}
doit();
