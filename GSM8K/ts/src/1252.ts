import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1252.json')) {
        console.log("Skipping 1252")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>("Dominick went to his team's changing room and saw half as many robots as helmets and half as many helmets as footballs kept there. If there were {{x1}} helmets, calculate the total number of items Dominick saw.", [], [{'input': {'x1': 20}, 'output': 70}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 20});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 70;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1252,
        "question": "Dominick went to his team's changing room and saw half as many robots as helmets and half as many helmets as footballs kept there. If there were 20 helmets, calculate the total number of items Dominick saw.",
        "answer": 70,
        "examples": [{'input': {'x1': 20}, 'output': 70}],
        });
    fs.writeFileSync('json/1252.json', json);
}
doit();
