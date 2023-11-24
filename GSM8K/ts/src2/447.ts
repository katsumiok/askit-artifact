import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/447.json')) {
        console.log("Skipping 447")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Joey has {{x1}} points before his turn in Scrabble. He scores {{x2}} points. Then Marcy, who has {{x3}} points, scores {{x4}} points. By how many points is Joey now winning?', [], [{'input': {'x1': 214, 'x2': 26, 'x3': 225, 'x4': 10}, 'output': 5}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 214, 'x2': 26, 'x3': 225, 'x4': 10});
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
        "id": 447,
        "question": 'Joey has 214 points before his turn in Scrabble. He scores 26 points. Then Marcy, who has 225 points, scores 10 points. By how many points is Joey now winning?',
        "answer": 5,
        "examples": [{'input': {'x1': 214, 'x2': 26, 'x3': 225, 'x4': 10}, 'output': 5}],
        });
    fs.writeFileSync('json2/447.json', json);
}
doit();
