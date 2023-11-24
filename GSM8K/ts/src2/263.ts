import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/263.json')) {
        console.log("Skipping 263")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>("There are {{x1}} trees in Chris's yard.  Ferdinand has half the number of trees that Chris has.  Harry has {{x2}} more than twice the number of trees that Ferdinand has.  How many more trees are in Harry's yard than Ferdinand's yard?", [], [{'input': {'x1': 6, 'x2': 5}, 'output': 8}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 6, 'x2': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 8;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 263,
        "question": "There are 6 trees in Chris's yard.  Ferdinand has half the number of trees that Chris has.  Harry has 5 more than twice the number of trees that Ferdinand has.  How many more trees are in Harry's yard than Ferdinand's yard?",
        "answer": 8,
        "examples": [{'input': {'x1': 6, 'x2': 5}, 'output': 8}],
        });
    fs.writeFileSync('json2/263.json', json);
}
doit();
