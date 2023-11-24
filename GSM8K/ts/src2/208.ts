import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/208.json')) {
        console.log("Skipping 208")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Rose went to the store on Monday and bought {{x1}} cakes. Tuesday she went to a different store and bought three times that number of cakes. On Wednesday she went to another store and bought {{x2}} times the number of cakes she did on Tuesday. How many cakes did she buy after all three days?', [], [{'input': {'x1': 4, 'x2': 5}, 'output': 76}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4, 'x2': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 76;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 208,
        "question": 'Rose went to the store on Monday and bought 4 cakes. Tuesday she went to a different store and bought three times that number of cakes. On Wednesday she went to another store and bought 5 times the number of cakes she did on Tuesday. How many cakes did she buy after all three days?',
        "answer": 76,
        "examples": [{'input': {'x1': 4, 'x2': 5}, 'output': 76}],
        });
    fs.writeFileSync('json2/208.json', json);
}
doit();
