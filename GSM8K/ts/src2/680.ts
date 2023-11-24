import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/680.json')) {
        console.log("Skipping 680")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>("The elevator in Jack's building supports a maximum load of {{x1}} kg. An adult weighs an average of {{x2}} kg. If Jack rides the elevator with {{x3}} other adults, by how much will they have exceeded the maximum load of the elevator?", [], [{'input': {'x1': 700, 'x2': 80, 'x3': 8}, 'output': 20}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 700, 'x2': 80, 'x3': 8});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 20;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 680,
        "question": "The elevator in Jack's building supports a maximum load of 700 kg. An adult weighs an average of 80 kg. If Jack rides the elevator with 8 other adults, by how much will they have exceeded the maximum load of the elevator?",
        "answer": 20,
        "examples": [{'input': {'x1': 700, 'x2': 80, 'x3': 8}, 'output': 20}],
        });
    fs.writeFileSync('json2/680.json', json);
}
doit();
