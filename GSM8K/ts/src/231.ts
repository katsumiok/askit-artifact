import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/231.json')) {
        console.log("Skipping 231")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Kylie and Robert enjoy going to the beach to collect shells. On Monday, Kylie collects {{x1}} more shells than Robert, who collects {{x2}} shells. On Tuesday, Kylie collects {{x3}} times more shells than she did on Monday. How many shells does Kylie collect on Tuesday?', [], [{'input': {'x1': 5, 'x2': 20, 'x3': 2}, 'output': 50}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5, 'x2': 20, 'x3': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 50;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 231,
        "question": 'Kylie and Robert enjoy going to the beach to collect shells. On Monday, Kylie collects 5 more shells than Robert, who collects 20 shells. On Tuesday, Kylie collects 2 times more shells than she did on Monday. How many shells does Kylie collect on Tuesday?',
        "answer": 50,
        "examples": [{'input': {'x1': 5, 'x2': 20, 'x3': 2}, 'output': 50}],
        });
    fs.writeFileSync('json/231.json', json);
}
doit();
