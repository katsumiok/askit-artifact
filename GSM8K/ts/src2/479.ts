import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/479.json')) {
        console.log("Skipping 479")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Tom decides to give his wife an anniversary getaway.  The plane tickets cost $5000 each.  The hotel is 20% more expensive than normal because it is a busy weekend.  The normal price is $1500 per day.  If they are there for {{x1}} days how much did the trip cost?', [], [{'input': {'x1': 3}, 'output': 15400}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 15400;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 479,
        "question": 'Tom decides to give his wife an anniversary getaway.  The plane tickets cost $5000 each.  The hotel is 20% more expensive than normal because it is a busy weekend.  The normal price is $1500 per day.  If they are there for 3 days how much did the trip cost?',
        "answer": 15400,
        "examples": [{'input': {'x1': 3}, 'output': 15400}],
        });
    fs.writeFileSync('json2/479.json', json);
}
doit();
