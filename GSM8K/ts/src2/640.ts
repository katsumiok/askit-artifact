import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/640.json')) {
        console.log("Skipping 640")
        return;
    }
    // measure time
    const f = define<number, {}>("Bill is ordering a new truck. He has decided to purchase a two-ton truck with several added features: a king cab upgrade, a towing package, leather seats, running boards, and the upgraded exterior light package.  The base price of the truck is $30,000, and the other features are at extra cost. The king cab is an extra $7,500, leather seats are one-third the cost of the king cab upgrade, running boards are $500 less than the leather seats, and the upgraded exterior light package is $1500.  What is the total cost of Bill's new truck, in dollars?", [], [{'input': {}, 'output': 43500}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 43500;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 640,
        "question": "Bill is ordering a new truck. He has decided to purchase a two-ton truck with several added features: a king cab upgrade, a towing package, leather seats, running boards, and the upgraded exterior light package.  The base price of the truck is $30,000, and the other features are at extra cost. The king cab is an extra $7,500, leather seats are one-third the cost of the king cab upgrade, running boards are $500 less than the leather seats, and the upgraded exterior light package is $1500.  What is the total cost of Bill's new truck, in dollars?",
        "answer": 43500,
        "examples": [{'input': {}, 'output': 43500}],
        });
    fs.writeFileSync('json2/640.json', json);
}
doit();
