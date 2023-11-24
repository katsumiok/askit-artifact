import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/861.json')) {
        console.log("Skipping 861")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Claire earns {{x1}} girl scout badge every month.  It takes Amber twice as long to earn a badge than Claire.  Wendy earns three times the amount of badges as Claire in the same time frame.  How many more badges does Wendy earn compared to Amber in a {{x2}} year time frame?', [], [{'input': {'x1': 1, 'x2': 1}, 'output': 30}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 1, 'x2': 1});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 30;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 861,
        "question": 'Claire earns 1 girl scout badge every month.  It takes Amber twice as long to earn a badge than Claire.  Wendy earns three times the amount of badges as Claire in the same time frame.  How many more badges does Wendy earn compared to Amber in a 1 year time frame?',
        "answer": 30,
        "examples": [{'input': {'x1': 1, 'x2': 1}, 'output': 30}],
        });
    fs.writeFileSync('json/861.json', json);
}
doit();
