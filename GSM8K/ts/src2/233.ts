import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/233.json')) {
        console.log("Skipping 233")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('There are {{x1}} penguins sunbathing in the snow.  One-third of them jump in and swim in the ocean.  Another one-third go inside the cave to eat their dinner.  How many penguins are still left sunbathing?', [], [{'input': {'x1': 36}, 'output': 12}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 36});
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
        "id": 233,
        "question": 'There are 36 penguins sunbathing in the snow.  One-third of them jump in and swim in the ocean.  Another one-third go inside the cave to eat their dinner.  How many penguins are still left sunbathing?',
        "answer": 12,
        "examples": [{'input': {'x1': 36}, 'output': 12}],
        });
    fs.writeFileSync('json2/233.json', json);
}
doit();
