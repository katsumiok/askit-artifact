import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1112.json')) {
        console.log("Skipping 1112")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Pierre, Paul, and Jacques bought {{x1}} kg of apples. Peter wants a quarter of that and Paul wants 1/3 of that. How many kilograms will James have left?', [], [{'input': {'x1': 12}, 'output': 5}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 12});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 5;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1112,
        "question": 'Pierre, Paul, and Jacques bought 12 kg of apples. Peter wants a quarter of that and Paul wants 1/3 of that. How many kilograms will James have left?',
        "answer": 5,
        "examples": [{'input': {'x1': 12}, 'output': 5}],
        });
    fs.writeFileSync('json/1112.json', json);
}
doit();
