import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/779.json')) {
        console.log("Skipping 779")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('The Llesis family drove and hiked {{x1}} hours to their vacation spot. They drove an average of {{x2}} miles per hour and hiked an average of {{x3}} miles per hour less than half their speed when they drive. If it took them 1.5 hours to hike, how far was their vacation spot?', [], [{'input': {'x1': 6, 'x2': 50, 'x3': 5}, 'output': 255}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 6, 'x2': 50, 'x3': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 255;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 779,
        "question": 'The Llesis family drove and hiked 6 hours to their vacation spot. They drove an average of 50 miles per hour and hiked an average of 5 miles per hour less than half their speed when they drive. If it took them 1.5 hours to hike, how far was their vacation spot?',
        "answer": 255,
        "examples": [{'input': {'x1': 6, 'x2': 50, 'x3': 5}, 'output': 255}],
        });
    fs.writeFileSync('json2/779.json', json);
}
doit();
