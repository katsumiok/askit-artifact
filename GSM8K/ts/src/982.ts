import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/982.json')) {
        console.log("Skipping 982")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>("In Mr. Roper's class of {{x1}} students, 20% of the class are football players.  Out of the remaining class, 25% of the students are cheerleaders or part of band.  These {{x2}} groups of students will need to leave early today to travel to an away game.  How many students are leaving early?", [], [{'input': {'x1': 30, 'x2': 3}, 'output': 12}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 30, 'x2': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 12;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 982,
        "question": "In Mr. Roper's class of 30 students, 20% of the class are football players.  Out of the remaining class, 25% of the students are cheerleaders or part of band.  These 3 groups of students will need to leave early today to travel to an away game.  How many students are leaving early?",
        "answer": 12,
        "examples": [{'input': {'x1': 30, 'x2': 3}, 'output': 12}],
        });
    fs.writeFileSync('json/982.json', json);
}
doit();
