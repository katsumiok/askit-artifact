import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/824.json')) {
        console.log("Skipping 824")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Kimberly bought {{x1}} packages of cat food and {{x2}} packages of dog food. Each package of cat food contained {{x3}} tins, and each package of dog food contained {{x4}} tins. How many more tins of cat food than dog food did Kimberly buy?', [], [{'input': {'x1': 8, 'x2': 6, 'x3': 11, 'x4': 6}, 'output': 52}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 8, 'x2': 6, 'x3': 11, 'x4': 6});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 52;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 824,
        "question": 'Kimberly bought 8 packages of cat food and 6 packages of dog food. Each package of cat food contained 11 tins, and each package of dog food contained 6 tins. How many more tins of cat food than dog food did Kimberly buy?',
        "answer": 52,
        "examples": [{'input': {'x1': 8, 'x2': 6, 'x3': 11, 'x4': 6}, 'output': 52}],
        });
    fs.writeFileSync('json2/824.json', json);
}
doit();
