import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/775.json')) {
        console.log("Skipping 775")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number}>('Henry needs to assemble some toys, specifically {{x1}} cars and {{x2}} motorcycles. Henry knows that to assemble all the toys he will need {{x3}} wheels for each car and {{x4}} wheels for each motorcycle. How many wheels will be left if he has a box with {{x5}} wheels in it?', [], [{'input': {'x1': 57, 'x2': 73, 'x3': 4, 'x4': 2, 'x5': 650}, 'output': 276}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 57, 'x2': 73, 'x3': 4, 'x4': 2, 'x5': 650});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 276;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 775,
        "question": 'Henry needs to assemble some toys, specifically 57 cars and 73 motorcycles. Henry knows that to assemble all the toys he will need 4 wheels for each car and 2 wheels for each motorcycle. How many wheels will be left if he has a box with 650 wheels in it?',
        "answer": 276,
        "examples": [{'input': {'x1': 57, 'x2': 73, 'x3': 4, 'x4': 2, 'x5': 650}, 'output': 276}],
        });
    fs.writeFileSync('json2/775.json', json);
}
doit();
