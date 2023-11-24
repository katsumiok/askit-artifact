import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/892.json')) {
        console.log("Skipping 892")
        return;
    }
    // measure time
    const f = define<number, {}>('Ellen is on a diet. She eats two carrots, a salad, and a yogurt every day. The salad costs her $6, while the yogurt is half the price. How much does Ellen pay for one carrot every day when in total she pays $11 for her goods?', [], [{'input': {}, 'output': 1}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 1;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 892,
        "question": 'Ellen is on a diet. She eats two carrots, a salad, and a yogurt every day. The salad costs her $6, while the yogurt is half the price. How much does Ellen pay for one carrot every day when in total she pays $11 for her goods?',
        "answer": 1,
        "examples": [{'input': {}, 'output': 1}],
        });
    fs.writeFileSync('json/892.json', json);
}
doit();
