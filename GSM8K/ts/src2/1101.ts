import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1101.json')) {
        console.log("Skipping 1101")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Amber, Micah, and Ahito ran {{x1}} miles in total. Amber ran {{x2}} miles. Micah ran 3.5 times what Amber ran. How many miles did Ahito run?', [], [{'input': {'x1': 52, 'x2': 8}, 'output': 16}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 52, 'x2': 8});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 16;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1101,
        "question": 'Amber, Micah, and Ahito ran 52 miles in total. Amber ran 8 miles. Micah ran 3.5 times what Amber ran. How many miles did Ahito run?',
        "answer": 16,
        "examples": [{'input': {'x1': 52, 'x2': 8}, 'output': 16}],
        });
    fs.writeFileSync('json2/1101.json', json);
}
doit();
