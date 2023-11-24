import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/89.json')) {
        console.log("Skipping 89")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>("Christina is planning a birthday party and needs .75 gift bags per invited guest, because 1/4 of attendees don't show up. She invited {{x1}} friends. Gift bags are $2 each. How much will she spend?", [], [{'input': {'x1': 16}, 'output': 24}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 16});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 24;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 89,
        "question": "Christina is planning a birthday party and needs .75 gift bags per invited guest, because 1/4 of attendees don't show up. She invited 16 friends. Gift bags are $2 each. How much will she spend?",
        "answer": 24,
        "examples": [{'input': {'x1': 16}, 'output': 24}],
        });
    fs.writeFileSync('json/89.json', json);
}
doit();
