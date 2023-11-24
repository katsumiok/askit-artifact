import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/616.json')) {
        console.log("Skipping 616")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Jane planted a beanstalk in her backyard. After the first week, it was {{x1}} inches tall. It doubled in height the second week. It grew another {{x2}} inches in the third week. How tall was the beanstalk after {{x3}} weeks?', [], [{'input': {'x1': 3, 'x2': 4, 'x3': 3}, 'output': 10}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3, 'x2': 4, 'x3': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 10;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 616,
        "question": 'Jane planted a beanstalk in her backyard. After the first week, it was 3 inches tall. It doubled in height the second week. It grew another 4 inches in the third week. How tall was the beanstalk after 3 weeks?',
        "answer": 10,
        "examples": [{'input': {'x1': 3, 'x2': 4, 'x3': 3}, 'output': 10}],
        });
    fs.writeFileSync('json/616.json', json);
}
doit();
