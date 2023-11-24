import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/963.json')) {
        console.log("Skipping 963")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Alex, Stan, and Adelwolfe are trying to catch them all, Pokemon that is.  Together they have caught {{x1}} Pokemon.  Alex has caught {{x2}} more than Stan, and Stan has caught {{x3}} less than {{x4}} times as many as Adelwolfe has caught. How many Pokemon has Stan caught?', [], [{'input': {'x1': 339, 'x2': 5, 'x3': 13, 'x4': 4}, 'output': 147}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 339, 'x2': 5, 'x3': 13, 'x4': 4});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 147;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 963,
        "question": 'Alex, Stan, and Adelwolfe are trying to catch them all, Pokemon that is.  Together they have caught 339 Pokemon.  Alex has caught 5 more than Stan, and Stan has caught 13 less than 4 times as many as Adelwolfe has caught. How many Pokemon has Stan caught?',
        "answer": 147,
        "examples": [{'input': {'x1': 339, 'x2': 5, 'x3': 13, 'x4': 4}, 'output': 147}],
        });
    fs.writeFileSync('json/963.json', json);
}
doit();
