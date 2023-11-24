import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1152.json')) {
        console.log("Skipping 1152")
        return;
    }
    // measure time
    const f = define<number, {}>("Mark buys one lottery ticket with a 20% chance of winning and a second lottery ticket that's three times more likely to win. What is the probability, expressed as a percentage, that both tickets are winners?", [], [{'input': {}, 'output': 12}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 12;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1152,
        "question": "Mark buys one lottery ticket with a 20% chance of winning and a second lottery ticket that's three times more likely to win. What is the probability, expressed as a percentage, that both tickets are winners?",
        "answer": 12,
        "examples": [{'input': {}, 'output': 12}],
        });
    fs.writeFileSync('json2/1152.json', json);
}
doit();
