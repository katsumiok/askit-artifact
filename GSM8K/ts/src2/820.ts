import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/820.json')) {
        console.log("Skipping 820")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Sandy walked from Holloway Shores to Sun Valley Shores for {{x1}} hours on a particular day. She also walked half as many hours on the second day as she walked on the first day, to Hollock valley shores. Calculate the total time Sandy took to walk in the two days in minutes.', [], [{'input': {'x1': 8}, 'output': 720}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 8});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 720;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 820,
        "question": 'Sandy walked from Holloway Shores to Sun Valley Shores for 8 hours on a particular day. She also walked half as many hours on the second day as she walked on the first day, to Hollock valley shores. Calculate the total time Sandy took to walk in the two days in minutes.',
        "answer": 720,
        "examples": [{'input': {'x1': 8}, 'output': 720}],
        });
    fs.writeFileSync('json2/820.json', json);
}
doit();
