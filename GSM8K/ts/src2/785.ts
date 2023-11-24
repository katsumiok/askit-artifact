import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/785.json')) {
        console.log("Skipping 785")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Carrie was given ten twenties and {{x1}} quarters by her aunt to use for lunch. If she spent all the quarters and 3/5 of the twenties, calculate the total amount of money she paid for the lunch.', [], [{'input': {'x1': 140}, 'output': 155}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 140});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 155;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 785,
        "question": 'Carrie was given ten twenties and 140 quarters by her aunt to use for lunch. If she spent all the quarters and 3/5 of the twenties, calculate the total amount of money she paid for the lunch.',
        "answer": 155,
        "examples": [{'input': {'x1': 140}, 'output': 155}],
        });
    fs.writeFileSync('json2/785.json', json);
}
doit();
