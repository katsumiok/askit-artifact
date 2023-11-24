import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/603.json')) {
        console.log("Skipping 603")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Ruiz can make {{x1}} pounds of chocolates in two hours. Marissa makes 3/4 times as many pounds of chocolates in an hour as Ruiz makes in the two hours. If they worked for {{x2}} hours in a day, calculate the total amount of chocolate pounds they made together.', [], [{'input': {'x1': 120, 'x2': 12}, 'output': 1800}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 120, 'x2': 12});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 1800;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 603,
        "question": 'Ruiz can make 120 pounds of chocolates in two hours. Marissa makes 3/4 times as many pounds of chocolates in an hour as Ruiz makes in the two hours. If they worked for 12 hours in a day, calculate the total amount of chocolate pounds they made together.',
        "answer": 1800,
        "examples": [{'input': {'x1': 120, 'x2': 12}, 'output': 1800}],
        });
    fs.writeFileSync('json/603.json', json);
}
doit();
