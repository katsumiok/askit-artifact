import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1282.json')) {
        console.log("Skipping 1282")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('John invited {{x1}} people to a birthday party.  Each guest will eat {{x2}} hot dogs.  He already has {{x3}} hot dogs left over from a previous party.  If a pack of hot dogs contains {{x4}} hot dogs and costs $2, how much does he need to spend on hot dogs?', [], [{'input': {'x1': 20, 'x2': 2, 'x3': 4, 'x4': 6}, 'output': 12}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 20, 'x2': 2, 'x3': 4, 'x4': 6});
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
        "id": 1282,
        "question": 'John invited 20 people to a birthday party.  Each guest will eat 2 hot dogs.  He already has 4 hot dogs left over from a previous party.  If a pack of hot dogs contains 6 hot dogs and costs $2, how much does he need to spend on hot dogs?',
        "answer": 12,
        "examples": [{'input': {'x1': 20, 'x2': 2, 'x3': 4, 'x4': 6}, 'output': 12}],
        });
    fs.writeFileSync('json2/1282.json', json);
}
doit();
