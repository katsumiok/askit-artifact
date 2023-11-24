import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1164.json')) {
        console.log("Skipping 1164")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Cole hid {{x1}} dozen eggs in the yard for the Easter egg hunt.  Lamar finds {{x2}} eggs. Stacy finds twice as many as Lamar.  Charlie finds {{x3}} less than Stacy.  And Mei finds half as many as Charlie.  How many eggs are still hidden in the yard?', [], [{'input': {'x1': 3, 'x2': 5, 'x3': 2}, 'output': 9}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3, 'x2': 5, 'x3': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 9;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1164,
        "question": 'Cole hid 3 dozen eggs in the yard for the Easter egg hunt.  Lamar finds 5 eggs. Stacy finds twice as many as Lamar.  Charlie finds 2 less than Stacy.  And Mei finds half as many as Charlie.  How many eggs are still hidden in the yard?',
        "answer": 9,
        "examples": [{'input': {'x1': 3, 'x2': 5, 'x3': 2}, 'output': 9}],
        });
    fs.writeFileSync('json/1164.json', json);
}
doit();
