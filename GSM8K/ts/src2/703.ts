import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/703.json')) {
        console.log("Skipping 703")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Larry cooked dumplings for a group of friends.  There are {{x1}} males, including Larry, and {{x2}} females among them. Each male ate {{x3}} more dumpling than each female. How many dumplings did Larry cook if each female ate {{x4}} dumplings and there were no leftovers?', [], [{'input': {'x1': 8, 'x2': 6, 'x3': 1, 'x4': 3}, 'output': 50}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 8, 'x2': 6, 'x3': 1, 'x4': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 50;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 703,
        "question": 'Larry cooked dumplings for a group of friends.  There are 8 males, including Larry, and 6 females among them. Each male ate 1 more dumpling than each female. How many dumplings did Larry cook if each female ate 3 dumplings and there were no leftovers?',
        "answer": 50,
        "examples": [{'input': {'x1': 8, 'x2': 6, 'x3': 1, 'x4': 3}, 'output': 50}],
        });
    fs.writeFileSync('json2/703.json', json);
}
doit();
