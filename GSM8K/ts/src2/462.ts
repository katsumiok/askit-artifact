import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/462.json')) {
        console.log("Skipping 462")
        return;
    }
    // measure time
    const f = define<number, {}>('Ali had $21. Leila gave him half of her $100. How much does Ali have now?', [], [{'input': {}, 'output': 71}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 71;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 462,
        "question": 'Ali had $21. Leila gave him half of her $100. How much does Ali have now?',
        "answer": 71,
        "examples": [{'input': {}, 'output': 71}],
        });
    fs.writeFileSync('json2/462.json', json);
}
doit();
