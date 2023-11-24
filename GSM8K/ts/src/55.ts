import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/55.json')) {
        console.log("Skipping 55")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Jean has {{x1}} lollipops. Jean eats {{x2}} of the lollipops. With the remaining lollipops, Jean wants to package {{x3}} lollipops in one bag. How many bags can Jean fill?', [], [{'input': {'x1': 30, 'x2': 2, 'x3': 2}, 'output': 14}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 30, 'x2': 2, 'x3': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 14;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 55,
        "question": 'Jean has 30 lollipops. Jean eats 2 of the lollipops. With the remaining lollipops, Jean wants to package 2 lollipops in one bag. How many bags can Jean fill?',
        "answer": 14,
        "examples": [{'input': {'x1': 30, 'x2': 2, 'x3': 2}, 'output': 14}],
        });
    fs.writeFileSync('json/55.json', json);
}
doit();
