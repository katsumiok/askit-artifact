import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/179.json')) {
        console.log("Skipping 179")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Lloyd earns $10 an hour on Math tutoring.  He tutored {{x1}} hours for the first week and {{x2}} hours for the second week. How much did he earn for the first two weeks?', [], [{'input': {'x1': 5, 'x2': 8}, 'output': 130}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5, 'x2': 8});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 130;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 179,
        "question": 'Lloyd earns $10 an hour on Math tutoring.  He tutored 5 hours for the first week and 8 hours for the second week. How much did he earn for the first two weeks?',
        "answer": 130,
        "examples": [{'input': {'x1': 5, 'x2': 8}, 'output': 130}],
        });
    fs.writeFileSync('json2/179.json', json);
}
doit();
