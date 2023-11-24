import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1041.json')) {
        console.log("Skipping 1041")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Molly is catering a birthday party for her sister and invited {{x1}} people. {{x2}} people want the chicken salad which is $6.50 per person and {{x3}} people want the pasta salad at $6 per person. What is the total amount Molly will pay for the catering?', [], [{'input': {'x1': 16, 'x2': 10, 'x3': 6}, 'output': 101}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 16, 'x2': 10, 'x3': 6});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 101;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1041,
        "question": 'Molly is catering a birthday party for her sister and invited 16 people. 10 people want the chicken salad which is $6.50 per person and 6 people want the pasta salad at $6 per person. What is the total amount Molly will pay for the catering?',
        "answer": 101,
        "examples": [{'input': {'x1': 16, 'x2': 10, 'x3': 6}, 'output': 101}],
        });
    fs.writeFileSync('json2/1041.json', json);
}
doit();
