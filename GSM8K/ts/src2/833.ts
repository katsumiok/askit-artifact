import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/833.json')) {
        console.log("Skipping 833")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Naruto can lift a mountain ten times higher than Kagiyami can.  But Kagiyami can lift a mountain {{x1}} times higher than Saskay can.  And Saskay can lift a mountain {{x2}} times higher than Pompei can.  If Pompei can lift a mountain {{x3}} inch, how high can Naruto lift a mountain, in feet?', [], [{'input': {'x1': 4, 'x2': 12, 'x3': 1}, 'output': 40}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4, 'x2': 12, 'x3': 1});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 40;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 833,
        "question": 'Naruto can lift a mountain ten times higher than Kagiyami can.  But Kagiyami can lift a mountain 4 times higher than Saskay can.  And Saskay can lift a mountain 12 times higher than Pompei can.  If Pompei can lift a mountain 1 inch, how high can Naruto lift a mountain, in feet?',
        "answer": 40,
        "examples": [{'input': {'x1': 4, 'x2': 12, 'x3': 1}, 'output': 40}],
        });
    fs.writeFileSync('json2/833.json', json);
}
doit();
