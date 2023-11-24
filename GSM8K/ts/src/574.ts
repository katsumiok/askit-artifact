import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/574.json')) {
        console.log("Skipping 574")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('A food truck only sells grilled cheeses.  They source their bread for $3.00 a loaf and each loaf makes {{x1}} sandwiches.  They spend $30.00 on different cheeses and condiments per {{x2}} sandwiches.  If they sell {{x3}} sandwiches for $7.00 each, what is their net profit?', [], [{'input': {'x1': 10, 'x2': 10, 'x3': 10}, 'output': 37}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 10, 'x2': 10, 'x3': 10});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 37;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 574,
        "question": 'A food truck only sells grilled cheeses.  They source their bread for $3.00 a loaf and each loaf makes 10 sandwiches.  They spend $30.00 on different cheeses and condiments per 10 sandwiches.  If they sell 10 sandwiches for $7.00 each, what is their net profit?',
        "answer": 37,
        "examples": [{'input': {'x1': 10, 'x2': 10, 'x3': 10}, 'output': 37}],
        });
    fs.writeFileSync('json/574.json', json);
}
doit();
