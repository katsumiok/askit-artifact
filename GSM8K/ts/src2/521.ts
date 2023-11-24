import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/521.json')) {
        console.log("Skipping 521")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Chris is way behind on his math homework. He has {{x1}} math problems to complete in total. He completes {{x2}} problems on Monday night. On Tuesday, he completes {{x3}} times as many problems as he did on Monday. On Wednesday, he completes one-quarter of the remaining math problems. How many math problems does he have left to complete on Thursday?', [], [{'input': {'x1': 100, 'x2': 12, 'x3': 3}, 'output': 39}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 100, 'x2': 12, 'x3': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 39;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 521,
        "question": 'Chris is way behind on his math homework. He has 100 math problems to complete in total. He completes 12 problems on Monday night. On Tuesday, he completes 3 times as many problems as he did on Monday. On Wednesday, he completes one-quarter of the remaining math problems. How many math problems does he have left to complete on Thursday?',
        "answer": 39,
        "examples": [{'input': {'x1': 100, 'x2': 12, 'x3': 3}, 'output': 39}],
        });
    fs.writeFileSync('json2/521.json', json);
}
doit();
