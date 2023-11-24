import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/700.json')) {
        console.log("Skipping 700")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>("Hannah's city is having a big display of fireworks for the 4th of July. They're going to set off {{x1}} boxes of {{x2}} fireworks each. Hannah's house is at the right angle to see 40% of the city's fireworks. Hannah will also set off {{x3}} boxes of {{x4}} fireworks each in her backyard. How many fireworks will Hannah see in total?", [], [{'input': {'x1': 15, 'x2': 20, 'x3': 3, 'x4': 5}, 'output': 135}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 15, 'x2': 20, 'x3': 3, 'x4': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 135;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 700,
        "question": "Hannah's city is having a big display of fireworks for the 4th of July. They're going to set off 15 boxes of 20 fireworks each. Hannah's house is at the right angle to see 40% of the city's fireworks. Hannah will also set off 3 boxes of 5 fireworks each in her backyard. How many fireworks will Hannah see in total?",
        "answer": 135,
        "examples": [{'input': {'x1': 15, 'x2': 20, 'x3': 3, 'x4': 5}, 'output': 135}],
        });
    fs.writeFileSync('json/700.json', json);
}
doit();
