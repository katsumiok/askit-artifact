import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/174.json')) {
        console.log("Skipping 174")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>("Billy is peeling and cutting potatoes in preparation for making potato salad for his big family reunion barbecue. It's a big event, so he has {{x1}} potatoes to get through. The potatoes are roughly the same size, so it takes about the same amount of time to peel and cut each one. It takes Billy about a minute and a half to peel a potato, but only about {{x2}} seconds to cut it up. How long will it take Billy to finish prepping the potatoes?", [], [{'input': {'x1': 60, 'x2': 5}, 'output': 95}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 60, 'x2': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 95;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 174,
        "question": "Billy is peeling and cutting potatoes in preparation for making potato salad for his big family reunion barbecue. It's a big event, so he has 60 potatoes to get through. The potatoes are roughly the same size, so it takes about the same amount of time to peel and cut each one. It takes Billy about a minute and a half to peel a potato, but only about 5 seconds to cut it up. How long will it take Billy to finish prepping the potatoes?",
        "answer": 95,
        "examples": [{'input': {'x1': 60, 'x2': 5}, 'output': 95}],
        });
    fs.writeFileSync('json2/174.json', json);
}
doit();
