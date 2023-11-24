import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1273.json')) {
        console.log("Skipping 1273")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Mazie has {{x1}} marbles and gives them to twins, Dallas and Darla.  If Dallas has a total of {{x2}} marbles after dropping {{x3}} of them in the playground, how many did Mazie give to Darla?', [], [{'input': {'x1': 52, 'x2': 21, 'x3': 4}, 'output': 27}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 52, 'x2': 21, 'x3': 4});
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
        "id": 1273,
        "question": 'Mazie has 52 marbles and gives them to twins, Dallas and Darla.  If Dallas has a total of 21 marbles after dropping 4 of them in the playground, how many did Mazie give to Darla?',
        "answer": 27,
        "examples": [{'input': {'x1': 52, 'x2': 21, 'x3': 4}, 'output': 27}],
        });
    fs.writeFileSync('json/1273.json', json);
}
doit();
