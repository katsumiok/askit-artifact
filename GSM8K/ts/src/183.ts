import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/183.json')) {
        console.log("Skipping 183")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number, x6: number, x7: number, x8: number}>('Two track teams are competing against each other in a {{x1}} by {{x2}} meter relay; a race where each competing team has four members that each run {{x3}} meters, or one lap, around a standard track.  One of the two teams is very well-rounded and each of their members will run their {{x4}} meter leg in precisely {{x5}} seconds.  The other team is less well-rounded; their first runner will run their {{x6}} meter leg in {{x7}} seconds then each subsequent runner will be {{x8}} seconds faster than the previous runner.  Using this information, how many seconds will the faster team win by?', [], [{'input': {'x1': 4, 'x2': 400, 'x3': 400, 'x4': 400, 'x5': 55, 'x6': 400, 'x7': 60, 'x8': 3}, 'output': 2}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4, 'x2': 400, 'x3': 400, 'x4': 400, 'x5': 55, 'x6': 400, 'x7': 60, 'x8': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 2;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 183,
        "question": 'Two track teams are competing against each other in a 4 by 400 meter relay; a race where each competing team has four members that each run 400 meters, or one lap, around a standard track.  One of the two teams is very well-rounded and each of their members will run their 400 meter leg in precisely 55 seconds.  The other team is less well-rounded; their first runner will run their 400 meter leg in 60 seconds then each subsequent runner will be 3 seconds faster than the previous runner.  Using this information, how many seconds will the faster team win by?',
        "answer": 2,
        "examples": [{'input': {'x1': 4, 'x2': 400, 'x3': 400, 'x4': 400, 'x5': 55, 'x6': 400, 'x7': 60, 'x8': 3}, 'output': 2}],
        });
    fs.writeFileSync('json/183.json', json);
}
doit();
