import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/970.json')) {
        console.log("Skipping 970")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>("Zeke's baseball team has {{x1}} more players than Carlton's. If Carlton's team has {{x2}} players, how many players are there in both teams combined?", [], [{'input': {'x1': 7, 'x2': 13}, 'output': 33}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 7, 'x2': 13});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 33;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 970,
        "question": "Zeke's baseball team has 7 more players than Carlton's. If Carlton's team has 13 players, how many players are there in both teams combined?",
        "answer": 33,
        "examples": [{'input': {'x1': 7, 'x2': 13}, 'output': 33}],
        });
    fs.writeFileSync('json2/970.json', json);
}
doit();
