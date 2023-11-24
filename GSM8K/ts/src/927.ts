import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/927.json')) {
        console.log("Skipping 927")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Andrew bakes {{x1}} mini cinnamon rolls and {{x2}} mini blueberry muffins. A normal cinnamon roll has {{x3}} calories and a normal blueberry muffin has {{x4}} calories. If a mini pastry has 1/3rd of the calories of a normal version, how many calories do the pastries he baked have?', [], [{'input': {'x1': 200, 'x2': 300, 'x3': 600, 'x4': 450}, 'output': 85000}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 200, 'x2': 300, 'x3': 600, 'x4': 450});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 85000;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 927,
        "question": 'Andrew bakes 200 mini cinnamon rolls and 300 mini blueberry muffins. A normal cinnamon roll has 600 calories and a normal blueberry muffin has 450 calories. If a mini pastry has 1/3rd of the calories of a normal version, how many calories do the pastries he baked have?',
        "answer": 85000,
        "examples": [{'input': {'x1': 200, 'x2': 300, 'x3': 600, 'x4': 450}, 'output': 85000}],
        });
    fs.writeFileSync('json/927.json', json);
}
doit();
