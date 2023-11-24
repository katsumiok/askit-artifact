import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/362.json')) {
        console.log("Skipping 362")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Mark makes custom dog beds. A bed for a Rottweiler takes {{x1}} pounds of stuffing, a bed for a chihuahua takes {{x2}} pounds of stuffing, and a bed for a collie takes the average amount of stuffing between the first two kinds of beds. How many pounds of stuffing does Mark need to make {{x3}} chihuahua beds and {{x4}} collie beds?', [], [{'input': {'x1': 8, 'x2': 2, 'x3': 4, 'x4': 3}, 'output': 23}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 8, 'x2': 2, 'x3': 4, 'x4': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 23;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 362,
        "question": 'Mark makes custom dog beds. A bed for a Rottweiler takes 8 pounds of stuffing, a bed for a chihuahua takes 2 pounds of stuffing, and a bed for a collie takes the average amount of stuffing between the first two kinds of beds. How many pounds of stuffing does Mark need to make 4 chihuahua beds and 3 collie beds?',
        "answer": 23,
        "examples": [{'input': {'x1': 8, 'x2': 2, 'x3': 4, 'x4': 3}, 'output': 23}],
        });
    fs.writeFileSync('json2/362.json', json);
}
doit();
