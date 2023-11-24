import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/813.json')) {
        console.log("Skipping 813")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>("John and DeSean bought a bag of marshmallows to make s'mores together. The bag has {{x1}} marshmallows. Each S'more uses one marshmallow. If John makes {{x2}} S'mores, DeSean makes {{x3}} S'mores, and they dropped {{x4}} marshmallows on the ground, how many S'mores can each kid have with the marshmallows left in the bag?", [], [{'input': {'x1': 35, 'x2': 9, 'x3': 9, 'x4': 3}, 'output': 7}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 35, 'x2': 9, 'x3': 9, 'x4': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 7;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 813,
        "question": "John and DeSean bought a bag of marshmallows to make s'mores together. The bag has 35 marshmallows. Each S'more uses one marshmallow. If John makes 9 S'mores, DeSean makes 9 S'mores, and they dropped 3 marshmallows on the ground, how many S'mores can each kid have with the marshmallows left in the bag?",
        "answer": 7,
        "examples": [{'input': {'x1': 35, 'x2': 9, 'x3': 9, 'x4': 3}, 'output': 7}],
        });
    fs.writeFileSync('json2/813.json', json);
}
doit();
