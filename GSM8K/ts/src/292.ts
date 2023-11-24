import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/292.json')) {
        console.log("Skipping 292")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Susan earns $5 every {{x1}} minutes for an online task she does. If she works between {{x2}} a.m. and {{x3}} a.m. and pauses in between for half an hour, how much money does she earn for the online task?', [], [{'input': {'x1': 10, 'x2': 8, 'x3': 11}, 'output': 75}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 10, 'x2': 8, 'x3': 11});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 75;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 292,
        "question": 'Susan earns $5 every 10 minutes for an online task she does. If she works between 8 a.m. and 11 a.m. and pauses in between for half an hour, how much money does she earn for the online task?',
        "answer": 75,
        "examples": [{'input': {'x1': 10, 'x2': 8, 'x3': 11}, 'output': 75}],
        });
    fs.writeFileSync('json/292.json', json);
}
doit();
