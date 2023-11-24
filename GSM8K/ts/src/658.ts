import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/658.json')) {
        console.log("Skipping 658")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Finley went to the grocery store and bought rice, beans, and pork for use in their home. It took her {{x1}} more minutes to cook pork than rice, while beans took half the combined cooking time of pork and rice. If it took her {{x2}} minutes to cook rice, how long in minutes did it take to cook all the food?', [], [{'input': {'x1': 20, 'x2': 30}, 'output': 120}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 20, 'x2': 30});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 120;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 658,
        "question": 'Finley went to the grocery store and bought rice, beans, and pork for use in their home. It took her 20 more minutes to cook pork than rice, while beans took half the combined cooking time of pork and rice. If it took her 30 minutes to cook rice, how long in minutes did it take to cook all the food?',
        "answer": 120,
        "examples": [{'input': {'x1': 20, 'x2': 30}, 'output': 120}],
        });
    fs.writeFileSync('json/658.json', json);
}
doit();
