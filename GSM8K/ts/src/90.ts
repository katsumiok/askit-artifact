import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/90.json')) {
        console.log("Skipping 90")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Ted the T-Rex was planning to bring potato salad to the dinosaur picnic.  He knows that an adult dinosaur will eat {{x1}} lbs of potato salad, and a child will eat half as much as an adult.  If there will be {{x2}} adults and {{x3}} children at the picnic, how many pounds of potato salad does Ted need to bring to the picnic if he hopes to have enough to feed everyone?', [], [{'input': {'x1': 10, 'x2': 20, 'x3': 5}, 'output': 225}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 10, 'x2': 20, 'x3': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 225;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 90,
        "question": 'Ted the T-Rex was planning to bring potato salad to the dinosaur picnic.  He knows that an adult dinosaur will eat 10 lbs of potato salad, and a child will eat half as much as an adult.  If there will be 20 adults and 5 children at the picnic, how many pounds of potato salad does Ted need to bring to the picnic if he hopes to have enough to feed everyone?',
        "answer": 225,
        "examples": [{'input': {'x1': 10, 'x2': 20, 'x3': 5}, 'output': 225}],
        });
    fs.writeFileSync('json/90.json', json);
}
doit();
