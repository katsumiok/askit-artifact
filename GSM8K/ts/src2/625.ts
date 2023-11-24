import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/625.json')) {
        console.log("Skipping 625")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>("Arianna plants a garden that has {{x1}} rows of flowers with {{x2}} flowers in each row. Currently, only 4/5 of the planted flowers have bloomed. How many flowers in Arianna's garden have bloomed?", [], [{'input': {'x1': 10, 'x2': 20}, 'output': 160}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 10, 'x2': 20});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 160;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 625,
        "question": "Arianna plants a garden that has 10 rows of flowers with 20 flowers in each row. Currently, only 4/5 of the planted flowers have bloomed. How many flowers in Arianna's garden have bloomed?",
        "answer": 160,
        "examples": [{'input': {'x1': 10, 'x2': 20}, 'output': 160}],
        });
    fs.writeFileSync('json2/625.json', json);
}
doit();
