import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/290.json')) {
        console.log("Skipping 290")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Ali is a superstar counter. He has won {{x1}} medals for counting super fast. His friend Izzy is also a really good counter and has {{x2}} less medals than Ali. Together they have {{x3}} times less medals than have been given out for counting. How many medals have been given out for counting?', [], [{'input': {'x1': 22, 'x2': 5, 'x3': 10}, 'output': 390}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 22, 'x2': 5, 'x3': 10});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 390;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 290,
        "question": 'Ali is a superstar counter. He has won 22 medals for counting super fast. His friend Izzy is also a really good counter and has 5 less medals than Ali. Together they have 10 times less medals than have been given out for counting. How many medals have been given out for counting?',
        "answer": 390,
        "examples": [{'input': {'x1': 22, 'x2': 5, 'x3': 10}, 'output': 390}],
        });
    fs.writeFileSync('json/290.json', json);
}
doit();
