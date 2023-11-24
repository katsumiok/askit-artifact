import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1061.json')) {
        console.log("Skipping 1061")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>("Betsy and Donovan made a meal together. Betsy's part took {{x1}} minutes longer than Donovan's part. The meal was made in {{x2}} minutes. How many minutes long was Betsy's part?", [], [{'input': {'x1': 18, 'x2': 98}, 'output': 58}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 18, 'x2': 98});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 58;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1061,
        "question": "Betsy and Donovan made a meal together. Betsy's part took 18 minutes longer than Donovan's part. The meal was made in 98 minutes. How many minutes long was Betsy's part?",
        "answer": 58,
        "examples": [{'input': {'x1': 18, 'x2': 98}, 'output': 58}],
        });
    fs.writeFileSync('json2/1061.json', json);
}
doit();
