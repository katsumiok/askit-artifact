import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/254.json')) {
        console.log("Skipping 254")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>("Shelly's {{x1}} kids spent all day at the water park.  Mitchel went down the water slide {{x2}} times.  Anne went down the slide 30% less than Mitchel and Robert went down {{x3}} times as much as Anne.  How many times did Robert go down the water slide?", [], [{'input': {'x1': 3, 'x2': 30, 'x3': 4}, 'output': 84}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3, 'x2': 30, 'x3': 4});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 84;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 254,
        "question": "Shelly's 3 kids spent all day at the water park.  Mitchel went down the water slide 30 times.  Anne went down the slide 30% less than Mitchel and Robert went down 4 times as much as Anne.  How many times did Robert go down the water slide?",
        "answer": 84,
        "examples": [{'input': {'x1': 3, 'x2': 30, 'x3': 4}, 'output': 84}],
        });
    fs.writeFileSync('json/254.json', json);
}
doit();
