import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/736.json')) {
        console.log("Skipping 736")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Boris has {{x1}} apples. Beck has {{x2}} fewer apples than Boris. If Boris gives Beck {{x3}} apples, how many fewer apples does Beck have than Boris now?', [], [{'input': {'x1': 100, 'x2': 23, 'x3': 10}, 'output': 3}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 100, 'x2': 23, 'x3': 10});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 3;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 736,
        "question": 'Boris has 100 apples. Beck has 23 fewer apples than Boris. If Boris gives Beck 10 apples, how many fewer apples does Beck have than Boris now?',
        "answer": 3,
        "examples": [{'input': {'x1': 100, 'x2': 23, 'x3': 10}, 'output': 3}],
        });
    fs.writeFileSync('json/736.json', json);
}
doit();
