import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/385.json')) {
        console.log("Skipping 385")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>("Lisa is part of a choir that has {{x1}} members, 50% of which are boys and 50% of which are girls.  The choir decides to perform with just its female members.  On the day of the performance, however, half the people performing can't make it to the show because their bus breaks down.  The choir's {{x2}} teachers then decide to sing with them. How many people sang in the performance?", [], [{'input': {'x1': 52, 'x2': 3}, 'output': 16}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 52, 'x2': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 16;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 385,
        "question": "Lisa is part of a choir that has 52 members, 50% of which are boys and 50% of which are girls.  The choir decides to perform with just its female members.  On the day of the performance, however, half the people performing can't make it to the show because their bus breaks down.  The choir's 3 teachers then decide to sing with them. How many people sang in the performance?",
        "answer": 16,
        "examples": [{'input': {'x1': 52, 'x2': 3}, 'output': 16}],
        });
    fs.writeFileSync('json2/385.json', json);
}
doit();
