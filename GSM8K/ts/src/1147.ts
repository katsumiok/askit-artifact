import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1147.json')) {
        console.log("Skipping 1147")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number, x6: number}>('Lauren is a cartoonist.  She can draw {{x1}} large-sized picture scenes per day, or she can draw {{x2}} medium-sized picture scenes per day, or she can draw {{x3}} small-sized picture scenes per day.  She was hired for a big project to create {{x4}} large-sized picture scenes, {{x5}} medium-sized picture scenes, and {{x6}} small-sized picture scenes.  How many days will it take for her to create all of the picture scenes?', [], [{'input': {'x1': 5, 'x2': 6, 'x3': 7, 'x4': 45, 'x5': 36, 'x6': 49}, 'output': 22}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5, 'x2': 6, 'x3': 7, 'x4': 45, 'x5': 36, 'x6': 49});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 22;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1147,
        "question": 'Lauren is a cartoonist.  She can draw 5 large-sized picture scenes per day, or she can draw 6 medium-sized picture scenes per day, or she can draw 7 small-sized picture scenes per day.  She was hired for a big project to create 45 large-sized picture scenes, 36 medium-sized picture scenes, and 49 small-sized picture scenes.  How many days will it take for her to create all of the picture scenes?',
        "answer": 22,
        "examples": [{'input': {'x1': 5, 'x2': 6, 'x3': 7, 'x4': 45, 'x5': 36, 'x6': 49}, 'output': 22}],
        });
    fs.writeFileSync('json/1147.json', json);
}
doit();
