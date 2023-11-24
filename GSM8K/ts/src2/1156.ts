import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1156.json')) {
        console.log("Skipping 1156")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Linus works for a trading company. He buys a mobile device for $20 and sells it for twice the amount of the original price. If he bought {{x1}} devices last Monday and {{x2}} devices last Tuesday, how much profit was he able to earn after selling all the mobile devices he bought last Monday and Tuesday?', [], [{'input': {'x1': 2, 'x2': 4}, 'output': 120}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2, 'x2': 4});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 120;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1156,
        "question": 'Linus works for a trading company. He buys a mobile device for $20 and sells it for twice the amount of the original price. If he bought 2 devices last Monday and 4 devices last Tuesday, how much profit was he able to earn after selling all the mobile devices he bought last Monday and Tuesday?',
        "answer": 120,
        "examples": [{'input': {'x1': 2, 'x2': 4}, 'output': 120}],
        });
    fs.writeFileSync('json2/1156.json', json);
}
doit();
