import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/766.json')) {
        console.log("Skipping 766")
        return;
    }
    // measure time
    const f = define<number, {}>('Marissa bought a ball at the store for $20. If she had $80 on her and used the rest of the money to buy her brother Jimmy, candy bars sold at $5 each, how many candy bars did Marissa buy for Jimmy?', [], [{'input': {}, 'output': 12}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
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
        "id": 766,
        "question": 'Marissa bought a ball at the store for $20. If she had $80 on her and used the rest of the money to buy her brother Jimmy, candy bars sold at $5 each, how many candy bars did Marissa buy for Jimmy?',
        "answer": 12,
        "examples": [{'input': {}, 'output': 12}],
        });
    fs.writeFileSync('json/766.json', json);
}
doit();
