import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1125.json')) {
        console.log("Skipping 1125")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('John packs M&M in small bags to eat.  He buys {{x1}} large bags weighing {{x2}} ounces each.  If an ounce of M&M has {{x3}} M&M in it how many small bags can he make if he puts {{x4}} in each small bag?', [], [{'input': {'x1': 3, 'x2': 10, 'x3': 30, 'x4': 10}, 'output': 90}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3, 'x2': 10, 'x3': 30, 'x4': 10});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 90;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1125,
        "question": 'John packs M&M in small bags to eat.  He buys 3 large bags weighing 10 ounces each.  If an ounce of M&M has 30 M&M in it how many small bags can he make if he puts 10 in each small bag?',
        "answer": 90,
        "examples": [{'input': {'x1': 3, 'x2': 10, 'x3': 30, 'x4': 10}, 'output': 90}],
        });
    fs.writeFileSync('json/1125.json', json);
}
doit();
