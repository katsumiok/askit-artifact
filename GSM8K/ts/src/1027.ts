import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1027.json')) {
        console.log("Skipping 1027")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number}>('A store offers sandwiches in {{x1}} different package sizes: the first package with {{x2}} sandwiches for $3, the second with {{x3}} sandwiches for $6, and a third with {{x4}} sandwiches, but the price is not indicated. Knowing that the prices are proportional, how much will the package with {{x5}} sandwiches cost?', [], [{'input': {'x1': 3, 'x2': 2, 'x3': 4, 'x4': 8, 'x5': 8}, 'output': 12}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3, 'x2': 2, 'x3': 4, 'x4': 8, 'x5': 8});
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
        "id": 1027,
        "question": 'A store offers sandwiches in 3 different package sizes: the first package with 2 sandwiches for $3, the second with 4 sandwiches for $6, and a third with 8 sandwiches, but the price is not indicated. Knowing that the prices are proportional, how much will the package with 8 sandwiches cost?',
        "answer": 12,
        "examples": [{'input': {'x1': 3, 'x2': 2, 'x3': 4, 'x4': 8, 'x5': 8}, 'output': 12}],
        });
    fs.writeFileSync('json/1027.json', json);
}
doit();
