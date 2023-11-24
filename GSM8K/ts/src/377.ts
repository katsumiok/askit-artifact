import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/377.json')) {
        console.log("Skipping 377")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Lucy sells apples from her orchard at $4 per piece. On Monday, she sold all the apples picked. On Tuesday, she picked {{x1}} apples. Come Wednesday, Lucy picked double the number of apples she did the previous day. If Lucy got $56 from selling the apples picked on Monday, how many apples did she pick over the three days?', [], [{'input': {'x1': 12}, 'output': 50}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 12});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 50;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 377,
        "question": 'Lucy sells apples from her orchard at $4 per piece. On Monday, she sold all the apples picked. On Tuesday, she picked 12 apples. Come Wednesday, Lucy picked double the number of apples she did the previous day. If Lucy got $56 from selling the apples picked on Monday, how many apples did she pick over the three days?',
        "answer": 50,
        "examples": [{'input': {'x1': 12}, 'output': 50}],
        });
    fs.writeFileSync('json/377.json', json);
}
doit();
