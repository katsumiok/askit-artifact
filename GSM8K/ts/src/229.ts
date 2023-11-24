import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/229.json')) {
        console.log("Skipping 229")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('A watermelon farm produced {{x1}} baby watermelons. Ashlyn went to the farm after two months and found out that 30% of the watermelons were ready for harvest, so she took them home. When she came back two weeks later, 3/4 of the remaining melons were ready, so she harvested them. How many melons were not ready to be harvested after the two weeks?', [], [{'input': {'x1': 120}, 'output': 21}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 120});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 21;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 229,
        "question": 'A watermelon farm produced 120 baby watermelons. Ashlyn went to the farm after two months and found out that 30% of the watermelons were ready for harvest, so she took them home. When she came back two weeks later, 3/4 of the remaining melons were ready, so she harvested them. How many melons were not ready to be harvested after the two weeks?',
        "answer": 21,
        "examples": [{'input': {'x1': 120}, 'output': 21}],
        });
    fs.writeFileSync('json/229.json', json);
}
doit();
