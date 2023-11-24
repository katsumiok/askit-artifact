import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/578.json')) {
        console.log("Skipping 578")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Diane gave a number train a starting value of 20. This starting value plus half the number was divided by {{x1}} and the resulting value was multiplied by the starting value minus 12. What was the final value of the number train?', [], [{'input': {'x1': 5}, 'output': 48}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 48;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 578,
        "question": 'Diane gave a number train a starting value of 20. This starting value plus half the number was divided by 5 and the resulting value was multiplied by the starting value minus 12. What was the final value of the number train?',
        "answer": 48,
        "examples": [{'input': {'x1': 5}, 'output': 48}],
        });
    fs.writeFileSync('json/578.json', json);
}
doit();
