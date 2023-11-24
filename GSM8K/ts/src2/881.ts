import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/881.json')) {
        console.log("Skipping 881")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('In {{x1}} years, Melanie will be {{x2}} years old. In how many years will her age be thrice her present age?', [], [{'input': {'x1': 10, 'x2': 18}, 'output': 16}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 10, 'x2': 18});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 16;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 881,
        "question": 'In 10 years, Melanie will be 18 years old. In how many years will her age be thrice her present age?',
        "answer": 16,
        "examples": [{'input': {'x1': 10, 'x2': 18}, 'output': 16}],
        });
    fs.writeFileSync('json2/881.json', json);
}
doit();
