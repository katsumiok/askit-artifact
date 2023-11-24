import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/883.json')) {
        console.log("Skipping 883")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Elaina is holding the final concert in her tour. To celebrate her final concert, she makes the concert twice as long as her usual concerts. At the end of the concert, she also performs a 15-minute encore. If the runtime of this final concert is {{x1}} minutes then how long, in minutes, do her usual concerts run for?', [], [{'input': {'x1': 65}, 'output': 25}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 65});
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
        "id": 883,
        "question": 'Elaina is holding the final concert in her tour. To celebrate her final concert, she makes the concert twice as long as her usual concerts. At the end of the concert, she also performs a 15-minute encore. If the runtime of this final concert is 65 minutes then how long, in minutes, do her usual concerts run for?',
        "answer": 25,
        "examples": [{'input': {'x1': 65}, 'output': 25}],
        });
    fs.writeFileSync('json2/883.json', json);
}
doit();
