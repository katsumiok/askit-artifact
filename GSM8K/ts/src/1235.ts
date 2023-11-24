import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1235.json')) {
        console.log("Skipping 1235")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Michael is traveling on the interstate at an average speed of 50km/hr (taking into account all the necessary stops for gas, relaxation, etc.). If he goes on like this for {{x1}} days, and the distance between Alaska and Texas is {{x2}} km, what percentage of this distance has he covered?', [], [{'input': {'x1': 3, 'x2': 6000}, 'output': 60}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3, 'x2': 6000});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 60;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1235,
        "question": 'Michael is traveling on the interstate at an average speed of 50km/hr (taking into account all the necessary stops for gas, relaxation, etc.). If he goes on like this for 3 days, and the distance between Alaska and Texas is 6000 km, what percentage of this distance has he covered?',
        "answer": 60,
        "examples": [{'input': {'x1': 3, 'x2': 6000}, 'output': 60}],
        });
    fs.writeFileSync('json/1235.json', json);
}
doit();
