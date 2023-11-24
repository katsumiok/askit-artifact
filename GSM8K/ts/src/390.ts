import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/390.json')) {
        console.log("Skipping 390")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Monica is wrapping Christmas gifts. She has {{x1}} gifts to wrap for her family, {{x2}} gifts to wrap for her friends and {{x3}} gifts to wrap for her teachers. She has {{x4}} inches of ribbon and wants to make a bow for each gift with it. How many inches of ribbon can she use for each gift bow?', [], [{'input': {'x1': 6, 'x2': 4, 'x3': 2, 'x4': 144}, 'output': 12}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 6, 'x2': 4, 'x3': 2, 'x4': 144});
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
        "id": 390,
        "question": 'Monica is wrapping Christmas gifts. She has 6 gifts to wrap for her family, 4 gifts to wrap for her friends and 2 gifts to wrap for her teachers. She has 144 inches of ribbon and wants to make a bow for each gift with it. How many inches of ribbon can she use for each gift bow?',
        "answer": 12,
        "examples": [{'input': {'x1': 6, 'x2': 4, 'x3': 2, 'x4': 144}, 'output': 12}],
        });
    fs.writeFileSync('json/390.json', json);
}
doit();
