import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1131.json')) {
        console.log("Skipping 1131")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('John cuts down an 80-foot tree.  He can make logs out of 80% of it. He cuts it into 4-foot logs.  From each of those logs, he cuts {{x1}} planks.  He then sells each plank for $1.2.  How much does he make?', [], [{'input': {'x1': 5}, 'output': 96}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 96;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1131,
        "question": 'John cuts down an 80-foot tree.  He can make logs out of 80% of it. He cuts it into 4-foot logs.  From each of those logs, he cuts 5 planks.  He then sells each plank for $1.2.  How much does he make?',
        "answer": 96,
        "examples": [{'input': {'x1': 5}, 'output': 96}],
        });
    fs.writeFileSync('json2/1131.json', json);
}
doit();
