import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1108.json')) {
        console.log("Skipping 1108")
        return;
    }
    // measure time
    const f = define<number, {}>('My mom went to a gardening shop. She bought a set of pots for $19 and a sack of garden soil for $26. At checkout, she used a coupon for $7 off. How much money did my mom spend at the gardening shop?', [], [{'input': {}, 'output': 38}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 38;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1108,
        "question": 'My mom went to a gardening shop. She bought a set of pots for $19 and a sack of garden soil for $26. At checkout, she used a coupon for $7 off. How much money did my mom spend at the gardening shop?',
        "answer": 38,
        "examples": [{'input': {}, 'output': 38}],
        });
    fs.writeFileSync('json/1108.json', json);
}
doit();
