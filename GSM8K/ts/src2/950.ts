import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/950.json')) {
        console.log("Skipping 950")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>("Bahati, Azibo, and Dinar each contributed to their team's {{x1}} points. Bahati scored the most points and it was {{x2}} more than Azibo scored and {{x3}} more points than Dinar scored. How many points did Azibo score?", [], [{'input': {'x1': 45, 'x2': 20, 'x3': 10}, 'output': 5}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 45, 'x2': 20, 'x3': 10});
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
        "id": 950,
        "question": "Bahati, Azibo, and Dinar each contributed to their team's 45 points. Bahati scored the most points and it was 20 more than Azibo scored and 10 more points than Dinar scored. How many points did Azibo score?",
        "answer": 5,
        "examples": [{'input': {'x1': 45, 'x2': 20, 'x3': 10}, 'output': 5}],
        });
    fs.writeFileSync('json2/950.json', json);
}
doit();
