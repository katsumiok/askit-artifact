import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/769.json')) {
        console.log("Skipping 769")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number}>('Tanya is teaching at school. She earns $15 for every hour and an additional $5 per day if she teaches more than {{x1}} classes. On Monday she teaches {{x2}} classes for {{x3}} hours, and on Wednesday {{x4}} classes for {{x5}} hours. How much did Tanya earn for these two days of teaching?', [], [{'input': {'x1': 3, 'x2': 4, 'x3': 5, 'x4': 2, 'x5': 2}, 'output': 110}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3, 'x2': 4, 'x3': 5, 'x4': 2, 'x5': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 110;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 769,
        "question": 'Tanya is teaching at school. She earns $15 for every hour and an additional $5 per day if she teaches more than 3 classes. On Monday she teaches 4 classes for 5 hours, and on Wednesday 2 classes for 2 hours. How much did Tanya earn for these two days of teaching?',
        "answer": 110,
        "examples": [{'input': {'x1': 3, 'x2': 4, 'x3': 5, 'x4': 2, 'x5': 2}, 'output': 110}],
        });
    fs.writeFileSync('json2/769.json', json);
}
doit();
