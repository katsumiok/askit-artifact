import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/304.json')) {
        console.log("Skipping 304")
        return;
    }
    // measure time
    const f = define<number, {}>('Watson works a 10-hour shift each day, five days a week. He earns $10 per hour and gets a $300 bonus each week if the company performs well. How much money did Watson make in April if the company performed very well for the whole month?', [], [{'input': {}, 'output': 3200}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 3200;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 304,
        "question": 'Watson works a 10-hour shift each day, five days a week. He earns $10 per hour and gets a $300 bonus each week if the company performs well. How much money did Watson make in April if the company performed very well for the whole month?',
        "answer": 3200,
        "examples": [{'input': {}, 'output': 3200}],
        });
    fs.writeFileSync('json2/304.json', json);
}
doit();
