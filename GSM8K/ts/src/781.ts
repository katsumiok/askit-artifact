import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/781.json')) {
        console.log("Skipping 781")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Four friends ordered four pizzas for a total of {{x1}} dollars. If two of the pizzas cost {{x2}} dollars, how much did each of the other two pizzas cost if they cost the same amount?', [], [{'input': {'x1': 64, 'x2': 30}, 'output': 17}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 64, 'x2': 30});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 17;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 781,
        "question": 'Four friends ordered four pizzas for a total of 64 dollars. If two of the pizzas cost 30 dollars, how much did each of the other two pizzas cost if they cost the same amount?',
        "answer": 17,
        "examples": [{'input': {'x1': 64, 'x2': 30}, 'output': 17}],
        });
    fs.writeFileSync('json/781.json', json);
}
doit();
