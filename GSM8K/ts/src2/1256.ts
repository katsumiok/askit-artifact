import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1256.json')) {
        console.log("Skipping 1256")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('The rainstorm flooded the wetlands and washed Phineas Frog {{x1}} yards away from his home in the swamp.  To return home, he will need to hop and swim his way back.  If he hops on land at a speed of {{x2}} yards per minute, and swims through water at a speed of {{x3}} yards per minute, how long will it take Phineas, in minutes, to return home if half of the distance is on land and the other half is in water?', [], [{'input': {'x1': 200, 'x2': 20, 'x3': 10}, 'output': 15}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 200, 'x2': 20, 'x3': 10});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 15;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1256,
        "question": 'The rainstorm flooded the wetlands and washed Phineas Frog 200 yards away from his home in the swamp.  To return home, he will need to hop and swim his way back.  If he hops on land at a speed of 20 yards per minute, and swims through water at a speed of 10 yards per minute, how long will it take Phineas, in minutes, to return home if half of the distance is on land and the other half is in water?',
        "answer": 15,
        "examples": [{'input': {'x1': 200, 'x2': 20, 'x3': 10}, 'output': 15}],
        });
    fs.writeFileSync('json2/1256.json', json);
}
doit();
