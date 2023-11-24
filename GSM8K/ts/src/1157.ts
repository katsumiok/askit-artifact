import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1157.json')) {
        console.log("Skipping 1157")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>("Carl has a cane that is half as long as he is tall.  Carl is one foot taller than his brother, Ned.  And Ned is two feet shorter than his cousin, Isabel.  If Isabel is {{x1}} feet tall, how long is Carl's cane, in feet?", [], [{'input': {'x1': 7}, 'output': 3}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 7});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 3;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1157,
        "question": "Carl has a cane that is half as long as he is tall.  Carl is one foot taller than his brother, Ned.  And Ned is two feet shorter than his cousin, Isabel.  If Isabel is 7 feet tall, how long is Carl's cane, in feet?",
        "answer": 3,
        "examples": [{'input': {'x1': 7}, 'output': 3}],
        });
    fs.writeFileSync('json/1157.json', json);
}
doit();
