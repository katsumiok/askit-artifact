import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/321.json')) {
        console.log("Skipping 321")
        return;
    }
    // measure time
    const f = define<number, {}>('A magazine costs half as much as a book. The book costs $4. A pen costs $1 less than a magazine. How much is the pen?', [], [{'input': {}, 'output': 1}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 1;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 321,
        "question": 'A magazine costs half as much as a book. The book costs $4. A pen costs $1 less than a magazine. How much is the pen?',
        "answer": 1,
        "examples": [{'input': {}, 'output': 1}],
        });
    fs.writeFileSync('json2/321.json', json);
}
doit();
