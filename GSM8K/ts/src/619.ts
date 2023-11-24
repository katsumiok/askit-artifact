import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/619.json')) {
        console.log("Skipping 619")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Each pole on a road intersection has {{x1}} street lights. If the number of poles at each intersection is 6, and the road has {{x2}} intersections, calculate the total number of functioning street lights if {{x3}} streetlights from the total number are not working.', [], [{'input': {'x1': 4, 'x2': 4, 'x3': 20}, 'output': 76}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4, 'x2': 4, 'x3': 20});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 76;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 619,
        "question": 'Each pole on a road intersection has 4 street lights. If the number of poles at each intersection is 6, and the road has 4 intersections, calculate the total number of functioning street lights if 20 streetlights from the total number are not working.',
        "answer": 76,
        "examples": [{'input': {'x1': 4, 'x2': 4, 'x3': 20}, 'output': 76}],
        });
    fs.writeFileSync('json/619.json', json);
}
doit();
