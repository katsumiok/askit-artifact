import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1165.json')) {
        console.log("Skipping 1165")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('John collects garbage from {{x1}} different apartment complexes.  The first two have {{x2}} apartments each and the last one is 60% bigger than the other two combined.  He collects garbage {{x3}} times a week from each place and he gets paid $.40 per collection for each apartment.  How much money does he make in a week?', [], [{'input': {'x1': 3, 'x2': 200, 'x3': 3}, 'output': 1248}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3, 'x2': 200, 'x3': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 1248;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1165,
        "question": 'John collects garbage from 3 different apartment complexes.  The first two have 200 apartments each and the last one is 60% bigger than the other two combined.  He collects garbage 3 times a week from each place and he gets paid $.40 per collection for each apartment.  How much money does he make in a week?',
        "answer": 1248,
        "examples": [{'input': {'x1': 3, 'x2': 200, 'x3': 3}, 'output': 1248}],
        });
    fs.writeFileSync('json2/1165.json', json);
}
doit();
