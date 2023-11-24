import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1167.json')) {
        console.log("Skipping 1167")
        return;
    }
    // measure time
    const f = define<number, {}>('Jack had $100. Sophia gave him 1/5 of her $100. How many dollars does Jack have now?', [], [{'input': {}, 'output': 120}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 120;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1167,
        "question": 'Jack had $100. Sophia gave him 1/5 of her $100. How many dollars does Jack have now?',
        "answer": 120,
        "examples": [{'input': {}, 'output': 120}],
        });
    fs.writeFileSync('json2/1167.json', json);
}
doit();
