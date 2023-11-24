import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/56.json')) {
        console.log("Skipping 56")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Peter plans to go to the movies this week. He always gets a ticket for $7 and popcorn for $7. If he has {{x1}} dollars for the week, how many times can he go to the movies?', [], [{'input': {'x1': 42}, 'output': 3}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 42});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 3;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 56,
        "question": 'Peter plans to go to the movies this week. He always gets a ticket for $7 and popcorn for $7. If he has 42 dollars for the week, how many times can he go to the movies?',
        "answer": 3,
        "examples": [{'input': {'x1': 42}, 'output': 3}],
        });
    fs.writeFileSync('json/56.json', json);
}
doit();
