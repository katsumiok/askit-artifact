import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1182.json')) {
        console.log("Skipping 1182")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Bob spends $27000 distributed between {{x1}} schools to buy books.  He can buy {{x2}} books for $500.  How many books can he buy per school?', [], [{'input': {'x1': 3, 'x2': 100}, 'output': 1800}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3, 'x2': 100});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 1800;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1182,
        "question": 'Bob spends $27000 distributed between 3 schools to buy books.  He can buy 100 books for $500.  How many books can he buy per school?',
        "answer": 1800,
        "examples": [{'input': {'x1': 3, 'x2': 100}, 'output': 1800}],
        });
    fs.writeFileSync('json/1182.json', json);
}
doit();
