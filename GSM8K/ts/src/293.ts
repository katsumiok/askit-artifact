import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/293.json')) {
        console.log("Skipping 293")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number}>('Three friends: Mike, Jim, and Tony decided to play a game. After {{x1}} rounds Mike has {{x2}} points, Jim {{x3}} points less than Mike, and Tony {{x4}} times more than Mike. In the fourth round, every player gets an extra point if they have over {{x5}} points. How many points do all three players have in total after the extra points had been distributed?', [], [{'input': {'x1': 3, 'x2': 21, 'x3': 3, 'x4': 2, 'x5': 20}, 'output': 83}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3, 'x2': 21, 'x3': 3, 'x4': 2, 'x5': 20});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 83;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 293,
        "question": 'Three friends: Mike, Jim, and Tony decided to play a game. After 3 rounds Mike has 21 points, Jim 3 points less than Mike, and Tony 2 times more than Mike. In the fourth round, every player gets an extra point if they have over 20 points. How many points do all three players have in total after the extra points had been distributed?',
        "answer": 83,
        "examples": [{'input': {'x1': 3, 'x2': 21, 'x3': 3, 'x4': 2, 'x5': 20}, 'output': 83}],
        });
    fs.writeFileSync('json/293.json', json);
}
doit();
