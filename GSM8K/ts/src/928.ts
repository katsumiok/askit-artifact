import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/928.json')) {
        console.log("Skipping 928")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Rita hand-picks Junebugs off of her plants every summer.  On Monday, she removed {{x1}} Junebugs.  On both Tuesday and Wednesday, she removed twice as many Junebugs as she did on Monday.  Thursday she removed {{x2}} and on Friday she removed 57.  What is the average number of Junebugs that she removes per day?', [], [{'input': {'x1': 39, 'x2': 48}, 'output': 60}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 39, 'x2': 48});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 60;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 928,
        "question": 'Rita hand-picks Junebugs off of her plants every summer.  On Monday, she removed 39 Junebugs.  On both Tuesday and Wednesday, she removed twice as many Junebugs as she did on Monday.  Thursday she removed 48 and on Friday she removed 57.  What is the average number of Junebugs that she removes per day?',
        "answer": 60,
        "examples": [{'input': {'x1': 39, 'x2': 48}, 'output': 60}],
        });
    fs.writeFileSync('json/928.json', json);
}
doit();
