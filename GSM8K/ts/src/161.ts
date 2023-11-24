import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/161.json')) {
        console.log("Skipping 161")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number, x6: number}>('Anakin and Locsin went to the beach today. Anakin caught {{x1}} starfish, {{x2}} sea horses, and {{x3}} clownfish. While Locsin caught {{x4}} fewer starfish than Anakin, {{x5}} fewer sea horses than Anakin, and {{x6}} more clownfish than Anakin. How many fish were they able to catch?', [], [{'input': {'x1': 10, 'x2': 6, 'x3': 3, 'x4': 5, 'x5': 3, 'x6': 2}, 'output': 32}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 10, 'x2': 6, 'x3': 3, 'x4': 5, 'x5': 3, 'x6': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 32;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 161,
        "question": 'Anakin and Locsin went to the beach today. Anakin caught 10 starfish, 6 sea horses, and 3 clownfish. While Locsin caught 5 fewer starfish than Anakin, 3 fewer sea horses than Anakin, and 2 more clownfish than Anakin. How many fish were they able to catch?',
        "answer": 32,
        "examples": [{'input': {'x1': 10, 'x2': 6, 'x3': 3, 'x4': 5, 'x5': 3, 'x6': 2}, 'output': 32}],
        });
    fs.writeFileSync('json/161.json', json);
}
doit();
