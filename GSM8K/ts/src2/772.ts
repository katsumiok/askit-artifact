import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/772.json')) {
        console.log("Skipping 772")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Tatiana is deciding how much of her weekend she wants to spend playing soccer. She has {{x1}} hours on Saturday and {{x2}} hours on Sunday. She is dividing her time between soccer, video games, and reading. If she reads for {{x3}} hours and plays video games for 1/3 of the remaining time, what percentage of her weekend does she spend playing soccer?', [], [{'input': {'x1': 7, 'x2': 5, 'x3': 3}, 'output': 50}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 7, 'x2': 5, 'x3': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 50;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 772,
        "question": 'Tatiana is deciding how much of her weekend she wants to spend playing soccer. She has 7 hours on Saturday and 5 hours on Sunday. She is dividing her time between soccer, video games, and reading. If she reads for 3 hours and plays video games for 1/3 of the remaining time, what percentage of her weekend does she spend playing soccer?',
        "answer": 50,
        "examples": [{'input': {'x1': 7, 'x2': 5, 'x3': 3}, 'output': 50}],
        });
    fs.writeFileSync('json2/772.json', json);
}
doit();
