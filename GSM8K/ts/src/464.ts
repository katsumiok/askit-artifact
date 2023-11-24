import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/464.json')) {
        console.log("Skipping 464")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Finley took part in a 100-meter race.  She started off in first, but then fell back {{x1}} spots.  She then moved ahead {{x2}} spots, before falling behind 3.  Lastly, she jumped ahead {{x3}} spot to finish the race.  What place did she finish in?', [], [{'input': {'x1': 5, 'x2': 2, 'x3': 1}, 'output': 6}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5, 'x2': 2, 'x3': 1});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 6;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 464,
        "question": 'Finley took part in a 100-meter race.  She started off in first, but then fell back 5 spots.  She then moved ahead 2 spots, before falling behind 3.  Lastly, she jumped ahead 1 spot to finish the race.  What place did she finish in?',
        "answer": 6,
        "examples": [{'input': {'x1': 5, 'x2': 2, 'x3': 1}, 'output': 6}],
        });
    fs.writeFileSync('json/464.json', json);
}
doit();
