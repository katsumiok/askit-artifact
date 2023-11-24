import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/674.json')) {
        console.log("Skipping 674")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>("Mrs. Jameson's bamboo in the backyard grows up to {{x1}} inches a day. Today, its height is {{x2}} feet. In how many days will its height be {{x3}} inches?", [], [{'input': {'x1': 30, 'x2': 20, 'x3': 600}, 'output': 12}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 30, 'x2': 20, 'x3': 600});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 12;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 674,
        "question": "Mrs. Jameson's bamboo in the backyard grows up to 30 inches a day. Today, its height is 20 feet. In how many days will its height be 600 inches?",
        "answer": 12,
        "examples": [{'input': {'x1': 30, 'x2': 20, 'x3': 600}, 'output': 12}],
        });
    fs.writeFileSync('json2/674.json', json);
}
doit();
