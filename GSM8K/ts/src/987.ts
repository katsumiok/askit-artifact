import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/987.json')) {
        console.log("Skipping 987")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Artemis is potting flowers with her father. They buy a 30-pound bag of soil. Each rose needs {{x1}} pound. Each carnation needs 1.5 pounds. Each Sunflower needs {{x2}} pounds. If they plant {{x3}} sunflowers and {{x4}} carnations, how many roses can they plant?', [], [{'input': {'x1': 1, 'x2': 3, 'x3': 4, 'x4': 10}, 'output': 3}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 1, 'x2': 3, 'x3': 4, 'x4': 10});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 3;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 987,
        "question": 'Artemis is potting flowers with her father. They buy a 30-pound bag of soil. Each rose needs 1 pound. Each carnation needs 1.5 pounds. Each Sunflower needs 3 pounds. If they plant 4 sunflowers and 10 carnations, how many roses can they plant?',
        "answer": 3,
        "examples": [{'input': {'x1': 1, 'x2': 3, 'x3': 4, 'x4': 10}, 'output': 3}],
        });
    fs.writeFileSync('json/987.json', json);
}
doit();
