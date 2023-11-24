import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/797.json')) {
        console.log("Skipping 797")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Carrie is planning the caroling schedule. The choir plans to sing "Deck the Halls" twice and "Jingle Bells" once. If "Deck the Halls" is {{x1}} seconds long and "Jingle Bells" is {{x2}} seconds long, how long will they be caroling?', [], [{'input': {'x1': 150, 'x2': 240}, 'output': 540}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 150, 'x2': 240});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 540;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 797,
        "question": 'Carrie is planning the caroling schedule. The choir plans to sing "Deck the Halls" twice and "Jingle Bells" once. If "Deck the Halls" is 150 seconds long and "Jingle Bells" is 240 seconds long, how long will they be caroling?',
        "answer": 540,
        "examples": [{'input': {'x1': 150, 'x2': 240}, 'output': 540}],
        });
    fs.writeFileSync('json/797.json', json);
}
doit();
