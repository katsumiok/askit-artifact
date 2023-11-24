import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/150.json')) {
        console.log("Skipping 150")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Steve and Tim decide to see who can get home from school the fastest. Steve lives further away than Tim, so he is allowed to ride his bike. Steve lives {{x1}} miles from the school and can bike at {{x2}} feet per minute. Tim lives {{x3}} miles away from the school. If Tim can ride his skateboard at {{x4}} feet per minute, how long will the winner be waiting at their house before the loser finishes the race?', [], [{'input': {'x1': 3, 'x2': 440, 'x3': 2, 'x4': 264}, 'output': 4}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3, 'x2': 440, 'x3': 2, 'x4': 264});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 4;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 150,
        "question": 'Steve and Tim decide to see who can get home from school the fastest. Steve lives further away than Tim, so he is allowed to ride his bike. Steve lives 3 miles from the school and can bike at 440 feet per minute. Tim lives 2 miles away from the school. If Tim can ride his skateboard at 264 feet per minute, how long will the winner be waiting at their house before the loser finishes the race?',
        "answer": 4,
        "examples": [{'input': {'x1': 3, 'x2': 440, 'x3': 2, 'x4': 264}, 'output': 4}],
        });
    fs.writeFileSync('json/150.json', json);
}
doit();
