import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/557.json')) {
        console.log("Skipping 557")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('A bag of buttons had {{x1}} buttons in it. Seven buttons had two holes and the rest had four holes. How many holes were in all the buttons in the bag?', [], [{'input': {'x1': 21}, 'output': 70}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 21});
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
        "id": 557,
        "question": 'A bag of buttons had 21 buttons in it. Seven buttons had two holes and the rest had four holes. How many holes were in all the buttons in the bag?',
        "answer": 70,
        "examples": [{'input': {'x1': 21}, 'output': 70}],
        });
    fs.writeFileSync('json/557.json', json);
}
doit();
