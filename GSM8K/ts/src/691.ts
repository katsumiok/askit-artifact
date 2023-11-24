import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/691.json')) {
        console.log("Skipping 691")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('John brings his dog to the vet. His dog needs {{x1}} vaccines, which are $20 each, and a heartworm check. The heartworm check is 60% of his total bill. If he brought $125 with him, how much does he leave with?', [], [{'input': {'x1': 2}, 'output': 25}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 25;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 691,
        "question": 'John brings his dog to the vet. His dog needs 2 vaccines, which are $20 each, and a heartworm check. The heartworm check is 60% of his total bill. If he brought $125 with him, how much does he leave with?',
        "answer": 25,
        "examples": [{'input': {'x1': 2}, 'output': 25}],
        });
    fs.writeFileSync('json/691.json', json);
}
doit();
