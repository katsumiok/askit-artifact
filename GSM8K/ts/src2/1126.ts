import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1126.json')) {
        console.log("Skipping 1126")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Alfie, the albatross, flies {{x1}} kilometers every day.  If the circumference of the earth is 40,000 kilometers, how many days will it take Alfie to fly a distance equal to half of the way around the earth?', [], [{'input': {'x1': 400}, 'output': 50}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 400});
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
        "id": 1126,
        "question": 'Alfie, the albatross, flies 400 kilometers every day.  If the circumference of the earth is 40,000 kilometers, how many days will it take Alfie to fly a distance equal to half of the way around the earth?',
        "answer": 50,
        "examples": [{'input': {'x1': 400}, 'output': 50}],
        });
    fs.writeFileSync('json2/1126.json', json);
}
doit();
