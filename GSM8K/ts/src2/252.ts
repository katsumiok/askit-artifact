import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/252.json')) {
        console.log("Skipping 252")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Last night Rick killed ten wolves and {{x1}} cougars while hunting. Today Rick killed three times as many wolves as cougars and three fewer cougars than the previous night. How many animals did Rick kill?', [], [{'input': {'x1': 15}, 'output': 73}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 15});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 73;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 252,
        "question": 'Last night Rick killed ten wolves and 15 cougars while hunting. Today Rick killed three times as many wolves as cougars and three fewer cougars than the previous night. How many animals did Rick kill?',
        "answer": 73,
        "examples": [{'input': {'x1': 15}, 'output': 73}],
        });
    fs.writeFileSync('json2/252.json', json);
}
doit();
