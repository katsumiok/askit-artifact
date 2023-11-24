import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/780.json')) {
        console.log("Skipping 780")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number, x6: number}>('Ava and Emma want to know who is better at the new video game Ava got for her birthday. They are each going to play one level and whoever has the highest score wins. They receive {{x1}} points for every enemy they jump on, {{x2}} points for each berry they collect, and {{x3}} points for every second left on the timer when they finish the level. If Ava jumps on {{x4}} more enemies than Emma and collects {{x5}} more berries, but finishes the level {{x6}} seconds slower, what is the difference between their two scores?', [], [{'input': {'x1': 10, 'x2': 5, 'x3': 30, 'x4': 8, 'x5': 3, 'x6': 4}, 'output': 25}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 10, 'x2': 5, 'x3': 30, 'x4': 8, 'x5': 3, 'x6': 4});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 25;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 780,
        "question": 'Ava and Emma want to know who is better at the new video game Ava got for her birthday. They are each going to play one level and whoever has the highest score wins. They receive 10 points for every enemy they jump on, 5 points for each berry they collect, and 30 points for every second left on the timer when they finish the level. If Ava jumps on 8 more enemies than Emma and collects 3 more berries, but finishes the level 4 seconds slower, what is the difference between their two scores?',
        "answer": 25,
        "examples": [{'input': {'x1': 10, 'x2': 5, 'x3': 30, 'x4': 8, 'x5': 3, 'x6': 4}, 'output': 25}],
        });
    fs.writeFileSync('json/780.json', json);
}
doit();
