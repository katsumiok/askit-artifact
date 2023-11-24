import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/683.json')) {
        console.log("Skipping 683")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Chris has a two-speed lawn mower. He can mow his entire lawn in "turtle" mode in {{x1}} hour, or {{x2}} minutes in "rabbit" mode. Today, he experimented by mowing half in turtle mode and half in rabbit mode. How many minutes did it take him to mow the lawn?', [], [{'input': {'x1': 1, 'x2': 40}, 'output': 50}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 1, 'x2': 40});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 50;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 683,
        "question": 'Chris has a two-speed lawn mower. He can mow his entire lawn in "turtle" mode in 1 hour, or 40 minutes in "rabbit" mode. Today, he experimented by mowing half in turtle mode and half in rabbit mode. How many minutes did it take him to mow the lawn?',
        "answer": 50,
        "examples": [{'input': {'x1': 1, 'x2': 40}, 'output': 50}],
        });
    fs.writeFileSync('json2/683.json', json);
}
doit();
