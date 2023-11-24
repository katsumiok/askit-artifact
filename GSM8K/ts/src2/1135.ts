import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1135.json')) {
        console.log("Skipping 1135")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number}>('3 trees each had {{x1}} blue birds in them. {{x2}} different trees each had {{x3}} blue birds. {{x4}} final tree had {{x5}} blue birds. How many blue birds were in the trees in total?', [], [{'input': {'x1': 7, 'x2': 2, 'x3': 4, 'x4': 1, 'x5': 3}, 'output': 32}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 7, 'x2': 2, 'x3': 4, 'x4': 1, 'x5': 3});
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
        "id": 1135,
        "question": '3 trees each had 7 blue birds in them. 2 different trees each had 4 blue birds. 1 final tree had 3 blue birds. How many blue birds were in the trees in total?',
        "answer": 32,
        "examples": [{'input': {'x1': 7, 'x2': 2, 'x3': 4, 'x4': 1, 'x5': 3}, 'output': 32}],
        });
    fs.writeFileSync('json2/1135.json', json);
}
doit();
