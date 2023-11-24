import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/866.json')) {
        console.log("Skipping 866")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Together, Sofie, Anne, and Fawn have {{x1}} books. If Sofie has {{x2}} more books than Anne, and Anne has {{x3}} fewer books than Fawn does, how many books does Fawn have?', [], [{'input': {'x1': 85, 'x2': 25, 'x3': 12}, 'output': 28}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 85, 'x2': 25, 'x3': 12});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 28;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 866,
        "question": 'Together, Sofie, Anne, and Fawn have 85 books. If Sofie has 25 more books than Anne, and Anne has 12 fewer books than Fawn does, how many books does Fawn have?',
        "answer": 28,
        "examples": [{'input': {'x1': 85, 'x2': 25, 'x3': 12}, 'output': 28}],
        });
    fs.writeFileSync('json2/866.json', json);
}
doit();
