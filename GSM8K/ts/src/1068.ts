import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1068.json')) {
        console.log("Skipping 1068")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>("One meatball sub sandwich contains {{x1}} meatballs.  Sidney ordered {{x2}} less than ten meatball sub sandwiches. Then Mark ate {{x3}} of Sidney's meatball sub sandwiches. So Sidney ordered another three sub sandwiches.  How many meatballs were in the sub sandwiches that remained?", [], [{'input': {'x1': 4, 'x2': 3, 'x3': 4}, 'output': 24}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4, 'x2': 3, 'x3': 4});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 24;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1068,
        "question": "One meatball sub sandwich contains 4 meatballs.  Sidney ordered 3 less than ten meatball sub sandwiches. Then Mark ate 4 of Sidney's meatball sub sandwiches. So Sidney ordered another three sub sandwiches.  How many meatballs were in the sub sandwiches that remained?",
        "answer": 24,
        "examples": [{'input': {'x1': 4, 'x2': 3, 'x3': 4}, 'output': 24}],
        });
    fs.writeFileSync('json/1068.json', json);
}
doit();
