import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/709.json')) {
        console.log("Skipping 709")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number}>('An ice cream factory makes {{x1}} quarts of chocolate ice cream in {{x2}} hours.  It can make {{x3}} quarts of vanilla ice cream in {{x4}} hours.  How many quarts in total would be made in {{x5}} hours?', [], [{'input': {'x1': 100, 'x2': 2, 'x3': 50, 'x4': 4, 'x5': 48}, 'output': 3000}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 100, 'x2': 2, 'x3': 50, 'x4': 4, 'x5': 48});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 3000;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 709,
        "question": 'An ice cream factory makes 100 quarts of chocolate ice cream in 2 hours.  It can make 50 quarts of vanilla ice cream in 4 hours.  How many quarts in total would be made in 48 hours?',
        "answer": 3000,
        "examples": [{'input': {'x1': 100, 'x2': 2, 'x3': 50, 'x4': 4, 'x5': 48}, 'output': 3000}],
        });
    fs.writeFileSync('json2/709.json', json);
}
doit();
