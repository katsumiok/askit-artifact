import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/411.json')) {
        console.log("Skipping 411")
        return;
    }
    // measure time
    const f = define<number, {}>('Tim decides to light off some fireworks for the fourth of July.  He buys a package of fireworks worth $400 and another pack worth twice that much.  He gets a 20% discount on them.  He also buys a finale firework that costs $150.  How much did he spend in total?', [], [{'input': {}, 'output': 1110}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 1110;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 411,
        "question": 'Tim decides to light off some fireworks for the fourth of July.  He buys a package of fireworks worth $400 and another pack worth twice that much.  He gets a 20% discount on them.  He also buys a finale firework that costs $150.  How much did he spend in total?',
        "answer": 1110,
        "examples": [{'input': {}, 'output': 1110}],
        });
    fs.writeFileSync('json2/411.json', json);
}
doit();
