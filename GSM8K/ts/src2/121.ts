import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/121.json')) {
        console.log("Skipping 121")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Morisette and Kael were asked to bring fruits. Morisette brought {{x1}} apples and {{x2}} oranges, while Kael brought twice the amount of apples and half the number of oranges than Morisette. How many fruits do they have in total?', [], [{'input': {'x1': 5, 'x2': 8}, 'output': 27}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5, 'x2': 8});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 27;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 121,
        "question": 'Morisette and Kael were asked to bring fruits. Morisette brought 5 apples and 8 oranges, while Kael brought twice the amount of apples and half the number of oranges than Morisette. How many fruits do they have in total?',
        "answer": 27,
        "examples": [{'input': {'x1': 5, 'x2': 8}, 'output': 27}],
        });
    fs.writeFileSync('json2/121.json', json);
}
doit();
