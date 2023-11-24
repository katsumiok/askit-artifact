import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1020.json')) {
        console.log("Skipping 1020")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('John picks {{x1}} bananas on Wednesday. Then he picks {{x2}} bananas on Thursday. On Friday, he picks triple the number of bananas he did on Wednesday. How many bananas does John have?', [], [{'input': {'x1': 4, 'x2': 6}, 'output': 22}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4, 'x2': 6});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 22;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1020,
        "question": 'John picks 4 bananas on Wednesday. Then he picks 6 bananas on Thursday. On Friday, he picks triple the number of bananas he did on Wednesday. How many bananas does John have?',
        "answer": 22,
        "examples": [{'input': {'x1': 4, 'x2': 6}, 'output': 22}],
        });
    fs.writeFileSync('json2/1020.json', json);
}
doit();
