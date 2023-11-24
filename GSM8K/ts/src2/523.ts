import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/523.json')) {
        console.log("Skipping 523")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('The bakers at the Beverly Hills Bakery baked {{x1}} loaves of bread on Monday morning. They sold {{x2}} loaves in the morning and {{x3}} loaves in the afternoon. A grocery store returned {{x4}} unsold loaves. How many loaves of bread did they have left?', [], [{'input': {'x1': 200, 'x2': 93, 'x3': 39, 'x4': 6}, 'output': 74}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 200, 'x2': 93, 'x3': 39, 'x4': 6});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 74;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 523,
        "question": 'The bakers at the Beverly Hills Bakery baked 200 loaves of bread on Monday morning. They sold 93 loaves in the morning and 39 loaves in the afternoon. A grocery store returned 6 unsold loaves. How many loaves of bread did they have left?',
        "answer": 74,
        "examples": [{'input': {'x1': 200, 'x2': 93, 'x3': 39, 'x4': 6}, 'output': 74}],
        });
    fs.writeFileSync('json2/523.json', json);
}
doit();
