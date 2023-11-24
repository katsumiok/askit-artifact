import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/719.json')) {
        console.log("Skipping 719")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Goldy bought {{x1}} sacks of rice and gave {{x2}} sacks to her cousin and {{x3}} sacks to her brother, if there are {{x4}} kilograms of rice per sack, how many kilograms does she gave to her cousin and brother?', [], [{'input': {'x1': 20, 'x2': 3, 'x3': 4, 'x4': 25}, 'output': 175}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 20, 'x2': 3, 'x3': 4, 'x4': 25});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 175;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 719,
        "question": 'Goldy bought 20 sacks of rice and gave 3 sacks to her cousin and 4 sacks to her brother, if there are 25 kilograms of rice per sack, how many kilograms does she gave to her cousin and brother?',
        "answer": 175,
        "examples": [{'input': {'x1': 20, 'x2': 3, 'x3': 4, 'x4': 25}, 'output': 175}],
        });
    fs.writeFileSync('json/719.json', json);
}
doit();
