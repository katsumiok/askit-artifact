import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1163.json')) {
        console.log("Skipping 1163")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Tyrion changes his face mask two times every time he goes out. If he goes out three times a day, how many face masks does he use every {{x1}} days?', [], [{'input': {'x1': 2}, 'output': 12}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 12;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1163,
        "question": 'Tyrion changes his face mask two times every time he goes out. If he goes out three times a day, how many face masks does he use every 2 days?',
        "answer": 12,
        "examples": [{'input': {'x1': 2}, 'output': 12}],
        });
    fs.writeFileSync('json2/1163.json', json);
}
doit();
