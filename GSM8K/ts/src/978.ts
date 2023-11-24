import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/978.json')) {
        console.log("Skipping 978")
        return;
    }
    // measure time
    const f = define<number, {}>('The red car is 40% cheaper than the blue car. The price of the blue car is $100. How much do both cars cost?', [], [{'input': {}, 'output': 160}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 160;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 978,
        "question": 'The red car is 40% cheaper than the blue car. The price of the blue car is $100. How much do both cars cost?',
        "answer": 160,
        "examples": [{'input': {}, 'output': 160}],
        });
    fs.writeFileSync('json/978.json', json);
}
doit();
