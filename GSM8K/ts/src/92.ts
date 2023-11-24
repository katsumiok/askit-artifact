import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/92.json')) {
        console.log("Skipping 92")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number}>('Emily has {{x1}} kids named Amy, Jackson, Corey, and James. Amy is {{x2}} years older than Jackson and {{x3}} years younger than Corey. If James is {{x4}} and is {{x5}} year younger than Corey, how old is Jackson?', [], [{'input': {'x1': 4, 'x2': 5, 'x3': 2, 'x4': 10, 'x5': 1}, 'output': 4}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4, 'x2': 5, 'x3': 2, 'x4': 10, 'x5': 1});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 4;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 92,
        "question": 'Emily has 4 kids named Amy, Jackson, Corey, and James. Amy is 5 years older than Jackson and 2 years younger than Corey. If James is 10 and is 1 year younger than Corey, how old is Jackson?',
        "answer": 4,
        "examples": [{'input': {'x1': 4, 'x2': 5, 'x3': 2, 'x4': 10, 'x5': 1}, 'output': 4}],
        });
    fs.writeFileSync('json/92.json', json);
}
doit();
