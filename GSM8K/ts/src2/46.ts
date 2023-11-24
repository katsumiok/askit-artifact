import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/46.json')) {
        console.log("Skipping 46")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Candice put {{x1}} post-it notes in her purse before she headed out to her job at the coffee shop.  On her way, she stopped off at the store and purchased a package of Post-it notes;  At work, she placed a single Post-it note on each of {{x2}} different cups of coffee.  If she had {{x3}} post-it notes remaining overall, how many Post-it notes were in the package that she purchased?', [], [{'input': {'x1': 80, 'x2': 220, 'x3': 23}, 'output': 163}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 80, 'x2': 220, 'x3': 23});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 163;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 46,
        "question": 'Candice put 80 post-it notes in her purse before she headed out to her job at the coffee shop.  On her way, she stopped off at the store and purchased a package of Post-it notes;  At work, she placed a single Post-it note on each of 220 different cups of coffee.  If she had 23 post-it notes remaining overall, how many Post-it notes were in the package that she purchased?',
        "answer": 163,
        "examples": [{'input': {'x1': 80, 'x2': 220, 'x3': 23}, 'output': 163}],
        });
    fs.writeFileSync('json2/46.json', json);
}
doit();
