import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/551.json')) {
        console.log("Skipping 551")
        return;
    }
    // measure time
    const f = define<number, {}>('Carly wants to treat her friends. She orders five hamburgers at $4 each, ten packs of potato fries at $0.30 each pack, and five cans of fruit drinks at $2 each can.  How much change does Carly get back if she gives one fifty-dollar bill?', [], [{'input': {}, 'output': 17}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 17;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 551,
        "question": 'Carly wants to treat her friends. She orders five hamburgers at $4 each, ten packs of potato fries at $0.30 each pack, and five cans of fruit drinks at $2 each can.  How much change does Carly get back if she gives one fifty-dollar bill?',
        "answer": 17,
        "examples": [{'input': {}, 'output': 17}],
        });
    fs.writeFileSync('json/551.json', json);
}
doit();
