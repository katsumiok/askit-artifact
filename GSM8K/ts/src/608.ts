import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/608.json')) {
        console.log("Skipping 608")
        return;
    }
    // measure time
    const f = define<number, {}>('Joe has $50 to buy an outfit for his new field trip. There is a 30% off sale at the clothing store. The shirt he picks out has a price of $25. He also picks out a pair of shorts for $35. Assuming that sales tax is included, how much money will Joe have left after the purchase?', [], [{'input': {}, 'output': 8}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 8;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 608,
        "question": 'Joe has $50 to buy an outfit for his new field trip. There is a 30% off sale at the clothing store. The shirt he picks out has a price of $25. He also picks out a pair of shorts for $35. Assuming that sales tax is included, how much money will Joe have left after the purchase?',
        "answer": 8,
        "examples": [{'input': {}, 'output': 8}],
        });
    fs.writeFileSync('json/608.json', json);
}
doit();
