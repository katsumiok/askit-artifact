import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1178.json')) {
        console.log("Skipping 1178")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Mike bought {{x1}} face masks while Johnny bought {{x2}} more than thrice as many as Mike. How many face masks did Johnny buy?', [], [{'input': {'x1': 5, 'x2': 2}, 'output': 17}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5, 'x2': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 17;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1178,
        "question": 'Mike bought 5 face masks while Johnny bought 2 more than thrice as many as Mike. How many face masks did Johnny buy?',
        "answer": 17,
        "examples": [{'input': {'x1': 5, 'x2': 2}, 'output': 17}],
        });
    fs.writeFileSync('json2/1178.json', json);
}
doit();
