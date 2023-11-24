import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/22.json')) {
        console.log("Skipping 22")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number}>("Billy sells DVDs. He has {{x1}} customers on Tuesday. His first {{x2}} customers buy one DVD each.  His next {{x3}} customers buy {{x4}} DVDs each.  His last {{x5}} customers don't buy any DVDs. How many DVDs did Billy sell on Tuesday?", [], [{'input': {'x1': 8, 'x2': 3, 'x3': 2, 'x4': 2, 'x5': 3}, 'output': 7}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 8, 'x2': 3, 'x3': 2, 'x4': 2, 'x5': 3});
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
        "id": 22,
        "question": "Billy sells DVDs. He has 8 customers on Tuesday. His first 3 customers buy one DVD each.  His next 2 customers buy 2 DVDs each.  His last 3 customers don't buy any DVDs. How many DVDs did Billy sell on Tuesday?",
        "answer": 7,
        "examples": [{'input': {'x1': 8, 'x2': 3, 'x3': 2, 'x4': 2, 'x5': 3}, 'output': 7}],
        });
    fs.writeFileSync('json2/22.json', json);
}
doit();
