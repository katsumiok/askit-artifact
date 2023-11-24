import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/609.json')) {
        console.log("Skipping 609")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Juan wants to add croissants to his bakery menu.  It takes 1/4 pound of butter to make {{x1}} dozen croissants.  He wants to start with making {{x2}} dozen a day for a week.  How many pounds of butter will he need to make these croissants?', [], [{'input': {'x1': 1, 'x2': 4}, 'output': 7}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 1, 'x2': 4});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 7;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 609,
        "question": 'Juan wants to add croissants to his bakery menu.  It takes 1/4 pound of butter to make 1 dozen croissants.  He wants to start with making 4 dozen a day for a week.  How many pounds of butter will he need to make these croissants?',
        "answer": 7,
        "examples": [{'input': {'x1': 1, 'x2': 4}, 'output': 7}],
        });
    fs.writeFileSync('json2/609.json', json);
}
doit();
