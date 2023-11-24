import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/845.json')) {
        console.log("Skipping 845")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>("There are {{x1}} students in Miss Susan's class. {{x2}} of them are good at math only, {{x3}} of them perform well in English only, and the rest are good at both math and English. How many are good at math?", [], [{'input': {'x1': 20, 'x2': 5, 'x3': 8}, 'output': 12}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 20, 'x2': 5, 'x3': 8});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 12;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 845,
        "question": "There are 20 students in Miss Susan's class. 5 of them are good at math only, 8 of them perform well in English only, and the rest are good at both math and English. How many are good at math?",
        "answer": 12,
        "examples": [{'input': {'x1': 20, 'x2': 5, 'x3': 8}, 'output': 12}],
        });
    fs.writeFileSync('json/845.json', json);
}
doit();
