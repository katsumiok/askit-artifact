import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/967.json')) {
        console.log("Skipping 967")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>("Nani is {{x1}} years old. His brother is twice his age. Nani's sister is 25% younger than him. What is the total age of all three of the family members?", [], [{'input': {'x1': 8}, 'output': 30}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 8});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 30;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 967,
        "question": "Nani is 8 years old. His brother is twice his age. Nani's sister is 25% younger than him. What is the total age of all three of the family members?",
        "answer": 30,
        "examples": [{'input': {'x1': 8}, 'output': 30}],
        });
    fs.writeFileSync('json2/967.json', json);
}
doit();
