import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1019.json')) {
        console.log("Skipping 1019")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('On a busy Saturday morning, a hotel was completely booked with {{x1}} guests. {{x2}} guests elected an early checkout and {{x3}} elected for a late checkout.  In the afternoon twice as many people checked in as those who opted for a late checkout. {{x4}} more people checked in after dinner was served.  How many guests does the hotel now have?', [], [{'input': {'x1': 100, 'x2': 24, 'x3': 15, 'x4': 7}, 'output': 98}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 100, 'x2': 24, 'x3': 15, 'x4': 7});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 98;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1019,
        "question": 'On a busy Saturday morning, a hotel was completely booked with 100 guests.  24 guests elected an early checkout and 15 elected for a late checkout.  In the afternoon twice as many people checked in as those who opted for a late checkout.  7 more people checked in after dinner was served.  How many guests does the hotel now have?',
        "answer": 98,
        "examples": [{'input': {'x1': 100, 'x2': 24, 'x3': 15, 'x4': 7}, 'output': 98}],
        });
    fs.writeFileSync('json/1019.json', json);
}
doit();
