import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/314.json')) {
        console.log("Skipping 314")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('A football team has {{x1}} members.  There are twice as many players on the offense as there is on the defense. There is half the number of players on the special teams as there is on the defense.  How many players are on the defense?', [], [{'input': {'x1': 105}, 'output': 30}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 105});
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
        "id": 314,
        "question": 'A football team has 105 members.  There are twice as many players on the offense as there is on the defense. There is half the number of players on the special teams as there is on the defense.  How many players are on the defense?',
        "answer": 30,
        "examples": [{'input': {'x1': 105}, 'output': 30}],
        });
    fs.writeFileSync('json2/314.json', json);
}
doit();
