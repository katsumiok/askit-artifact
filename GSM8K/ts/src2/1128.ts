import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1128.json')) {
        console.log("Skipping 1128")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Liam is {{x1}} years old now. Two years ago, Liam’s age was twice the age of Vince. How old is Vince now?', [], [{'input': {'x1': 16}, 'output': 9}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 16});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 9;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1128,
        "question": 'Liam is 16 years old now. Two years ago, Liam’s age was twice the age of Vince. How old is Vince now?',
        "answer": 9,
        "examples": [{'input': {'x1': 16}, 'output': 9}],
        });
    fs.writeFileSync('json2/1128.json', json);
}
doit();
