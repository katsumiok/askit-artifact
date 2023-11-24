import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/131.json')) {
        console.log("Skipping 131")
        return;
    }
    // measure time
    const f = define<number, {}>('The expenditure of Joseph in May was $500. In June, his expenditure was $60 less. How much was his total expenditure for those two months?', [], [{'input': {}, 'output': 940}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 940;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 131,
        "question": 'The expenditure of Joseph in May was $500. In June, his expenditure was $60 less. How much was his total expenditure for those two months?',
        "answer": 940,
        "examples": [{'input': {}, 'output': 940}],
        });
    fs.writeFileSync('json2/131.json', json);
}
doit();
