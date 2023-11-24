import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1196.json')) {
        console.log("Skipping 1196")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>("Alain's mom bought {{x1}} packs of red pens and also bought twice the amount of black pens than the red. If each pack has {{x2}} pens, how many pens does Alain have?", [], [{'input': {'x1': 5, 'x2': 5}, 'output': 75}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5, 'x2': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 75;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1196,
        "question": "Alain's mom bought 5 packs of red pens and also bought twice the amount of black pens than the red. If each pack has 5 pens, how many pens does Alain have?",
        "answer": 75,
        "examples": [{'input': {'x1': 5, 'x2': 5}, 'output': 75}],
        });
    fs.writeFileSync('json2/1196.json', json);
}
doit();
