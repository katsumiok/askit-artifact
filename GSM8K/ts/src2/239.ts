import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/239.json')) {
        console.log("Skipping 239")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('The number of students in a school hall was 1000. The hall had {{x1}} entrances A, B, and C which also served as the exits. If after a meeting 30% of the students went out of the building through exit A, 3/5 of the remaining went out through exit B, and the rest went out through exit C, calculate the number of students who went out through exit C.', [], [{'input': {'x1': 3}, 'output': 280}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 280;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 239,
        "question": 'The number of students in a school hall was 1000. The hall had 3 entrances A, B, and C which also served as the exits. If after a meeting 30% of the students went out of the building through exit A, 3/5 of the remaining went out through exit B, and the rest went out through exit C, calculate the number of students who went out through exit C.',
        "answer": 280,
        "examples": [{'input': {'x1': 3}, 'output': 280}],
        });
    fs.writeFileSync('json2/239.json', json);
}
doit();
