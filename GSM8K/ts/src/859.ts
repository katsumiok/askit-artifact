import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/859.json')) {
        console.log("Skipping 859")
        return;
    }
    // measure time
    const f = define<number, {}>('While working at the restaurant, each of the forty customers who came into the restaurant gave Rafaela a $20 tip. Julieta received 10% less money in tips than Rafaela. How much money did Julieta and Rafaela receive as tips altogether?', [], [{'input': {}, 'output': 1520}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 1520;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 859,
        "question": 'While working at the restaurant, each of the forty customers who came into the restaurant gave Rafaela a $20 tip. Julieta received 10% less money in tips than Rafaela. How much money did Julieta and Rafaela receive as tips altogether?',
        "answer": 1520,
        "examples": [{'input': {}, 'output': 1520}],
        });
    fs.writeFileSync('json/859.json', json);
}
doit();
