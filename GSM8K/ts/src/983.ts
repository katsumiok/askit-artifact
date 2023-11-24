import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/983.json')) {
        console.log("Skipping 983")
        return;
    }
    // measure time
    const f = define<number, {}>("Charlie has boots that are five times the size of Sophie's. If Sophie wears size five boots, what is the average size of shoe worn by the two?", [], [{'input': {}, 'output': 15}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
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
        "id": 983,
        "question": "Charlie has boots that are five times the size of Sophie's. If Sophie wears size five boots, what is the average size of shoe worn by the two?",
        "answer": 15,
        "examples": [{'input': {}, 'output': 15}],
        });
    fs.writeFileSync('json/983.json', json);
}
doit();
