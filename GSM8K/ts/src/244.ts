import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/244.json')) {
        console.log("Skipping 244")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Griffin had {{x1}} french fries, but Kyle took {{x2}} of them.  Billy took twice as many as Kyle.  Ginger gave Griffin a handful of her fries, and then Colby took from Griffin {{x3}} less than the number of fries that Kyle had taken.  If in the end Griffin had {{x4}} fries, how many fries did Ginger give Griffin?', [], [{'input': {'x1': 24, 'x2': 5, 'x3': 3, 'x4': 27}, 'output': 20}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 24, 'x2': 5, 'x3': 3, 'x4': 27});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 20;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 244,
        "question": 'Griffin had 24 french fries, but Kyle took 5 of them.  Billy took twice as many as Kyle.  Ginger gave Griffin a handful of her fries, and then Colby took from Griffin 3 less than the number of fries that Kyle had taken.  If in the end Griffin had 27 fries, how many fries did Ginger give Griffin?',
        "answer": 20,
        "examples": [{'input': {'x1': 24, 'x2': 5, 'x3': 3, 'x4': 27}, 'output': 20}],
        });
    fs.writeFileSync('json/244.json', json);
}
doit();
