import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/560.json')) {
        console.log("Skipping 560")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number}>('A pet shop had {{x1}} cages of rodents. {{x2}} of the cages have {{x3}} hamsters and the other {{x4}} have {{x5}} guinea pigs. How many rodents did the pet shop have in total?', [], [{'input': {'x1': 6, 'x2': 3, 'x3': 10, 'x4': 3, 'x5': 5}, 'output': 45}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 6, 'x2': 3, 'x3': 10, 'x4': 3, 'x5': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 45;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 560,
        "question": 'A pet shop had 6 cages of rodents. 3 of the cages have 10 hamsters and the other 3 have 5 guinea pigs. How many rodents did the pet shop have in total?',
        "answer": 45,
        "examples": [{'input': {'x1': 6, 'x2': 3, 'x3': 10, 'x4': 3, 'x5': 5}, 'output': 45}],
        });
    fs.writeFileSync('json2/560.json', json);
}
doit();
