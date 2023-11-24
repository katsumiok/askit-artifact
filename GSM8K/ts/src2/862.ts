import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/862.json')) {
        console.log("Skipping 862")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Every hour, Paige can bake {{x1}} banana bread loaves in the oven.  Each banana bread loaf is cut into {{x2}} slices and wrapped individually for sale.  Each slice is sold for {{x3}} cents for a fundraiser.  If she baked from 1:00 PM - 6:00 PM straight, and sold all the slices, how much did she raise in dollars?', [], [{'input': {'x1': 2, 'x2': 8, 'x3': 50}, 'output': 40}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2, 'x2': 8, 'x3': 50});
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
        "id": 862,
        "question": 'Every hour, Paige can bake 2 banana bread loaves in the oven.  Each banana bread loaf is cut into 8 slices and wrapped individually for sale.  Each slice is sold for 50 cents for a fundraiser.  If she baked from 1:00 PM - 6:00 PM straight, and sold all the slices, how much did she raise in dollars?',
        "answer": 40,
        "examples": [{'input': {'x1': 2, 'x2': 8, 'x3': 50}, 'output': 40}],
        });
    fs.writeFileSync('json2/862.json', json);
}
doit();
