import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/562.json')) {
        console.log("Skipping 562")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>("The great pyramids sit at an angle of {{x1}} degrees from the ground when you stand at the entrance of Sahir's house. The sun is moving at {{x2}} degrees an hour straight upward from the pyramid relative to Sahir's house. If the sun starts at the tip of the pyramid and moves for {{x3}} hours, how many degrees will there be from the ground to the sun?", [], [{'input': {'x1': 32, 'x2': 5, 'x3': 10}, 'output': 82}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 32, 'x2': 5, 'x3': 10});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 82;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 562,
        "question": "The great pyramids sit at an angle of 32 degrees from the ground when you stand at the entrance of Sahir's house. The sun is moving at 5 degrees an hour straight upward from the pyramid relative to Sahir's house. If the sun starts at the tip of the pyramid and moves for 10 hours, how many degrees will there be from the ground to the sun?",
        "answer": 82,
        "examples": [{'input': {'x1': 32, 'x2': 5, 'x3': 10}, 'output': 82}],
        });
    fs.writeFileSync('json2/562.json', json);
}
doit();
