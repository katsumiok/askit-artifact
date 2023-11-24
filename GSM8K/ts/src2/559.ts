import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/559.json')) {
        console.log("Skipping 559")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('A stickler for health, Octavia drinks half the daily recommended cups of coffee. By contract, Octavia’s husband Juan drinks {{x1}} times the amount of coffee she drinks. Juan’s doctor has asked him to reduce his coffee intake to the daily recommendation of {{x2}} cups. By how many cups must Juan reduce his daily coffee intake?', [], [{'input': {'x1': 10, 'x2': 4}, 'output': 16}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 10, 'x2': 4});
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
        "id": 559,
        "question": 'A stickler for health, Octavia drinks half the daily recommended cups of coffee. By contract, Octavia’s husband Juan drinks 10 times the amount of coffee she drinks. Juan’s doctor has asked him to reduce his coffee intake to the daily recommendation of 4 cups. By how many cups must Juan reduce his daily coffee intake?',
        "answer": 16,
        "examples": [{'input': {'x1': 10, 'x2': 4}, 'output': 16}],
        });
    fs.writeFileSync('json2/559.json', json);
}
doit();
