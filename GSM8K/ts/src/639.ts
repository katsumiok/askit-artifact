import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/639.json')) {
        console.log("Skipping 639")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Bob wants to dig a hole {{x1}} feet long by {{x2}} feet wide by {{x3}} feet deep. If it takes him {{x4}} seconds to shovel a cubic foot of earth, how long will it take him to dig the hole?', [], [{'input': {'x1': 6, 'x2': 4, 'x3': 3, 'x4': 3}, 'output': 216}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 6, 'x2': 4, 'x3': 3, 'x4': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 216;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 639,
        "question": 'Bob wants to dig a hole 6 feet long by 4 feet wide by 3 feet deep. If it takes him 3 seconds to shovel a cubic foot of earth, how long will it take him to dig the hole?',
        "answer": 216,
        "examples": [{'input': {'x1': 6, 'x2': 4, 'x3': 3, 'x4': 3}, 'output': 216}],
        });
    fs.writeFileSync('json/639.json', json);
}
doit();
