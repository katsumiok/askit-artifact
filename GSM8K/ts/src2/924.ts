import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/924.json')) {
        console.log("Skipping 924")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('A three-toed sloth moves very slowly, and only eats when he is up in his tree.  For a meal of berries, it takes the sloth {{x1}} hours to make the trip down the tree, pick up berries, and climb back up into his tree.  Assuming he picks the same number of berries on each trip, what is the least number of berries he can pick up per trip down to the ground if he wants to collect {{x2}} berries in {{x3}} hours?', [], [{'input': {'x1': 4, 'x2': 24, 'x3': 8}, 'output': 12}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4, 'x2': 24, 'x3': 8});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 12;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 924,
        "question": 'A three-toed sloth moves very slowly, and only eats when he is up in his tree.  For a meal of berries, it takes the sloth 4 hours to make the trip down the tree, pick up berries, and climb back up into his tree.  Assuming he picks the same number of berries on each trip, what is the least number of berries he can pick up per trip down to the ground if he wants to collect 24 berries in 8 hours?',
        "answer": 12,
        "examples": [{'input': {'x1': 4, 'x2': 24, 'x3': 8}, 'output': 12}],
        });
    fs.writeFileSync('json2/924.json', json);
}
doit();
