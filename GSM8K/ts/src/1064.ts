import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1064.json')) {
        console.log("Skipping 1064")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('The Science Center hosted field trips Monday through Friday last week. On Monday, {{x1}} classes visited. Twice as many visited on Tuesday and three times as many visited on Wednesday. Another {{x2}} classes visited on Thursday and {{x3}} visited on Friday. In all, how many classes visited the Science Center last week?', [], [{'input': {'x1': 32, 'x2': 30, 'x3': 25}, 'output': 247}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 32, 'x2': 30, 'x3': 25});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 247;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1064,
        "question": 'The Science Center hosted field trips Monday through Friday last week. On Monday, 32 classes visited. Twice as many visited on Tuesday and three times as many visited on Wednesday. Another 30 classes visited on Thursday and 25 visited on Friday. In all, how many classes visited the Science Center last week?',
        "answer": 247,
        "examples": [{'input': {'x1': 32, 'x2': 30, 'x3': 25}, 'output': 247}],
        });
    fs.writeFileSync('json/1064.json', json);
}
doit();
