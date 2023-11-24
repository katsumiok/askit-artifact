import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/227.json')) {
        console.log("Skipping 227")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Chad ordered a build-your-own burrito for lunch.  The base burrito is $6.50.  He adds extra meat for $2.00, extra cheese for $1.00, avocado for $1.00 and {{x1}} sauces for $0.25 each.  He decides to upgrade his meal for an extra $3.00 which will add chips and a drink.  He has a gift card for $5.00 that he uses at check out.  How much does he still owe?', [], [{'input': {'x1': 2}, 'output': 9}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 9;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 227,
        "question": 'Chad ordered a build-your-own burrito for lunch.  The base burrito is $6.50.  He adds extra meat for $2.00, extra cheese for $1.00, avocado for $1.00 and 2 sauces for $0.25 each.  He decides to upgrade his meal for an extra $3.00 which will add chips and a drink.  He has a gift card for $5.00 that he uses at check out.  How much does he still owe?',
        "answer": 9,
        "examples": [{'input': {'x1': 2}, 'output': 9}],
        });
    fs.writeFileSync('json2/227.json', json);
}
doit();
