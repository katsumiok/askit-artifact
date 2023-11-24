import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/529.json')) {
        console.log("Skipping 529")
        return;
    }
    // measure time
    const f = define<number, {}>('Tom bought a CD for $4, and a headphone set. In total, he paid $48. How many more CDs would Tom have been able to buy if he had decided not to buy the headphone set?', [], [{'input': {}, 'output': 11}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 11;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 529,
        "question": 'Tom bought a CD for $4, and a headphone set. In total, he paid $48. How many more CDs would Tom have been able to buy if he had decided not to buy the headphone set?',
        "answer": 11,
        "examples": [{'input': {}, 'output': 11}],
        });
    fs.writeFileSync('json/529.json', json);
}
doit();
