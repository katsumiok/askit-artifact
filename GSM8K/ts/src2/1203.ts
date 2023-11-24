import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1203.json')) {
        console.log("Skipping 1203")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>("Mattison is {{x1}} inches tall. His two-story house is {{x2}} times as high as he is. The floor to the ceiling on the first floor is thrice as high as he is. How high is the roof from the second floor's floor in inches?", [], [{'input': {'x1': 60, 'x2': 7}, 'output': 240}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 60, 'x2': 7});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 240;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1203,
        "question": "Mattison is 60 inches tall. His two-story house is 7 times as high as he is. The floor to the ceiling on the first floor is thrice as high as he is. How high is the roof from the second floor's floor in inches?",
        "answer": 240,
        "examples": [{'input': {'x1': 60, 'x2': 7}, 'output': 240}],
        });
    fs.writeFileSync('json2/1203.json', json);
}
doit();
