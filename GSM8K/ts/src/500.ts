import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/500.json')) {
        console.log("Skipping 500")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Together Lily, David, and Bodhi collected {{x1}} insects. Lily found {{x2}} more than David. David found half of what Bodhi found. How many insects did Lily find?', [], [{'input': {'x1': 43, 'x2': 7}, 'output': 16}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 43, 'x2': 7});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 16;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 500,
        "question": 'Together Lily, David, and Bodhi collected 43 insects. Lily found 7 more than David. David found half of what Bodhi found. How many insects did Lily find?',
        "answer": 16,
        "examples": [{'input': {'x1': 43, 'x2': 7}, 'output': 16}],
        });
    fs.writeFileSync('json/500.json', json);
}
doit();
