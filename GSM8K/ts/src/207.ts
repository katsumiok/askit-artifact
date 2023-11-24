import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/207.json')) {
        console.log("Skipping 207")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>("Joe's bag of Halloween candy has {{x1}} chocolate bars and {{x2}} candied apples. Each chocolate bar weighs twice as much as each candied apple. If each chocolate bar weighs 40g, how much does Joe's bag of candy weigh, in grams?", [], [{'input': {'x1': 25, 'x2': 80}, 'output': 2600}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 25, 'x2': 80});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 2600;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 207,
        "question": "Joe's bag of Halloween candy has 25 chocolate bars and 80 candied apples. Each chocolate bar weighs twice as much as each candied apple. If each chocolate bar weighs 40g, how much does Joe's bag of candy weigh, in grams?",
        "answer": 2600,
        "examples": [{'input': {'x1': 25, 'x2': 80}, 'output': 2600}],
        });
    fs.writeFileSync('json/207.json', json);
}
doit();
