import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/610.json')) {
        console.log("Skipping 610")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>("It costs $194 per meter to repave a street. Monica's street is {{x1}} meters long. How much more does it cost to repave Lewis' street, which is {{x2}} meters long?", [], [{'input': {'x1': 150, 'x2': 490}, 'output': 65960}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 150, 'x2': 490});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 65960;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 610,
        "question": "It costs $194 per meter to repave a street. Monica's street is 150 meters long. How much more does it cost to repave Lewis' street, which is 490 meters long?",
        "answer": 65960,
        "examples": [{'input': {'x1': 150, 'x2': 490}, 'output': 65960}],
        });
    fs.writeFileSync('json2/610.json', json);
}
doit();
