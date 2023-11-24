import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1001.json')) {
        console.log("Skipping 1001")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Jordan wanted to surprise her mom with a homemade birthday cake.  From reading the instructions, she knew it would take {{x1}} minutes to make the cake batter and {{x2}} minutes to bake the cake.  The cake would require {{x3}} hours to cool and an additional {{x4}} minutes to frost the cake.  If she plans to make the cake all on the same day, what is the latest time of day that Jordan can start making the cake to be ready to serve it at 5:00 pm?', [], [{'input': {'x1': 20, 'x2': 30, 'x3': 2, 'x4': 10}, 'output': 2}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 20, 'x2': 30, 'x3': 2, 'x4': 10});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 2;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1001,
        "question": 'Jordan wanted to surprise her mom with a homemade birthday cake.  From reading the instructions, she knew it would take 20 minutes to make the cake batter and 30 minutes to bake the cake.  The cake would require 2 hours to cool and an additional 10 minutes to frost the cake.  If she plans to make the cake all on the same day, what is the latest time of day that Jordan can start making the cake to be ready to serve it at 5:00 pm?',
        "answer": 2,
        "examples": [{'input': {'x1': 20, 'x2': 30, 'x3': 2, 'x4': 10}, 'output': 2}],
        });
    fs.writeFileSync('json/1001.json', json);
}
doit();
