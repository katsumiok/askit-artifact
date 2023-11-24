import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/369.json')) {
        console.log("Skipping 369")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('44 seniors need to receive awards.  Each senior receives a picture frame that costs $20.  Each picture frame needs to be etched with the logo for an additional 20% cost per frame. {{x1}} of the seniors will also receive pins that are $5.  1/4 of the seniors are officers and they will need to receive cords that are $12 each.  How much will be spent on the senior gifts?', [], [{'input': {'x1': 2}, 'output': 1198}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 1198;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 369,
        "question": '44 seniors need to receive awards.  Each senior receives a picture frame that costs $20.  Each picture frame needs to be etched with the logo for an additional 20% cost per frame.  2 of the seniors will also receive pins that are $5.  1/4 of the seniors are officers and they will need to receive cords that are $12 each.  How much will be spent on the senior gifts?',
        "answer": 1198,
        "examples": [{'input': {'x1': 2}, 'output': 1198}],
        });
    fs.writeFileSync('json2/369.json', json);
}
doit();
