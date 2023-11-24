import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/885.json')) {
        console.log("Skipping 885")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('The Ben and Aggie Burrito Shop makes {{x1}} chimichangas on Tuesdays, {{x2}} chimichangas on Wednesdays and twice as many on Friday. How many chimichangas do they make on those three days?', [], [{'input': {'x1': 125, 'x2': 125}, 'output': 500}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 125, 'x2': 125});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 500;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 885,
        "question": 'The Ben and Aggie Burrito Shop makes 125 chimichangas on Tuesdays, 125 chimichangas on Wednesdays and twice as many on Friday. How many chimichangas do they make on those three days?',
        "answer": 500,
        "examples": [{'input': {'x1': 125, 'x2': 125}, 'output': 500}],
        });
    fs.writeFileSync('json/885.json', json);
}
doit();
