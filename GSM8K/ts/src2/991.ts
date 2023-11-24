import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/991.json')) {
        console.log("Skipping 991")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>("Comet Halley orbits the sun every {{x1}} years. Bill's dad saw the Comet when he was {{x2}} years old. Bill saw the comet a second time when he was three times the age his father was when he saw the Comet. How old was Bill when he saw the Comet for the first time?", [], [{'input': {'x1': 75, 'x2': 30}, 'output': 15}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 75, 'x2': 30});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 15;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 991,
        "question": "Comet Halley orbits the sun every 75 years. Bill's dad saw the Comet when he was 30 years old. Bill saw the comet a second time when he was three times the age his father was when he saw the Comet. How old was Bill when he saw the Comet for the first time?",
        "answer": 15,
        "examples": [{'input': {'x1': 75, 'x2': 30}, 'output': 15}],
        });
    fs.writeFileSync('json2/991.json', json);
}
doit();
