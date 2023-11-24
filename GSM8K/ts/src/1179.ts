import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1179.json')) {
        console.log("Skipping 1179")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>("James has {{x1}} teeth. His dentist drills {{x2}} of them and caps {{x3}} more teeth than he drills. What percentage of James' teeth does the dentist fix?", [], [{'input': {'x1': 30, 'x2': 4, 'x3': 7}, 'output': 50}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 30, 'x2': 4, 'x3': 7});
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
        "id": 1179,
        "question": "James has 30 teeth. His dentist drills 4 of them and caps 7 more teeth than he drills. What percentage of James' teeth does the dentist fix?",
        "answer": 50,
        "examples": [{'input': {'x1': 30, 'x2': 4, 'x3': 7}, 'output': 50}],
        });
    fs.writeFileSync('json/1179.json', json);
}
doit();
