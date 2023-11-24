import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1088.json')) {
        console.log("Skipping 1088")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('There are {{x1}} periods in the day for a normal student but John has to take {{x2}} extra classes.  Each class is {{x3}} minutes long.  He goes to class for {{x4}} days a week.  He then spends 1/16 of his weekly minutes each on Saturday and Sunday as extra learning time.  How many hours a week does he spend learning?', [], [{'input': {'x1': 6, 'x2': 2, 'x3': 40, 'x4': 5}, 'output': 30}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 6, 'x2': 2, 'x3': 40, 'x4': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 30;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1088,
        "question": 'There are 6 periods in the day for a normal student but John has to take 2 extra classes.  Each class is 40 minutes long.  He goes to class for 5 days a week.  He then spends 1/16 of his weekly minutes each on Saturday and Sunday as extra learning time.  How many hours a week does he spend learning?',
        "answer": 30,
        "examples": [{'input': {'x1': 6, 'x2': 2, 'x3': 40, 'x4': 5}, 'output': 30}],
        });
    fs.writeFileSync('json/1088.json', json);
}
doit();
