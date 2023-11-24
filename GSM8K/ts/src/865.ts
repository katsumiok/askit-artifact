import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/865.json')) {
        console.log("Skipping 865")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('A bumper car rink has {{x1}} red cars. They have {{x2}} fewer green cars than they have red cars. They have {{x3}} times the number of blue cars as they have green cars. The rink also has yellow cars.  If the rink has {{x4}} cars in total how many yellow cars do they have?', [], [{'input': {'x1': 12, 'x2': 2, 'x3': 3, 'x4': 75}, 'output': 23}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 12, 'x2': 2, 'x3': 3, 'x4': 75});
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
        "id": 865,
        "question": 'A bumper car rink has 12 red cars. They have 2 fewer green cars than they have red cars. They have 3 times the number of blue cars as they have green cars. The rink also has yellow cars.  If the rink has 75 cars in total how many yellow cars do they have?',
        "answer": 23,
        "examples": [{'input': {'x1': 12, 'x2': 2, 'x3': 3, 'x4': 75}, 'output': 23}],
        });
    fs.writeFileSync('json/865.json', json);
}
doit();
