import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/864.json')) {
        console.log("Skipping 864")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('George, a grade six teacher, ordered {{x1}} burritos for the sixth-grade class picnic. If there were {{x2}} students at the picnic, and each student was given ten burritos, with Mr. George eating {{x3}} of them, calculate the total number of leftover burritos from the picnic?', [], [{'input': {'x1': 600, 'x2': 50, 'x3': 20}, 'output': 80}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 600, 'x2': 50, 'x3': 20});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 80;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 864,
        "question": 'George, a grade six teacher, ordered 600 burritos for the sixth-grade class picnic. If there were 50 students at the picnic, and each student was given ten burritos, with Mr. George eating 20 of them, calculate the total number of leftover burritos from the picnic?',
        "answer": 80,
        "examples": [{'input': {'x1': 600, 'x2': 50, 'x3': 20}, 'output': 80}],
        });
    fs.writeFileSync('json2/864.json', json);
}
doit();
