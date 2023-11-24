import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/329.json')) {
        console.log("Skipping 329")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Erin has {{x1}} lollipops. Her mother gives Erin another {{x2}} lollipops. If Erin gives {{x3}} of her lollipops to Ella, how many lollipops does she have left?', [], [{'input': {'x1': 7, 'x2': 10, 'x3': 3}, 'output': 14}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 7, 'x2': 10, 'x3': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 14;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 329,
        "question": 'Erin has 7 lollipops. Her mother gives Erin another 10 lollipops. If Erin gives 3 of her lollipops to Ella, how many lollipops does she have left?',
        "answer": 14,
        "examples": [{'input': {'x1': 7, 'x2': 10, 'x3': 3}, 'output': 14}],
        });
    fs.writeFileSync('json2/329.json', json);
}
doit();
