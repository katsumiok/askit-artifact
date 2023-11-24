import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/930.json')) {
        console.log("Skipping 930")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('When Sophie watches her nephew, she gets out a variety of toys for him. The bag of building blocks has {{x1}} blocks in it. The bin of stuffed animals has {{x2}} stuffed animals inside. The tower of stacking rings has {{x3}} multicolored rings on it. Sophie recently bought a tube of bouncy balls, bringing her total number of toys for her nephew up to 62. How many bouncy balls came in the tube?', [], [{'input': {'x1': 31, 'x2': 8, 'x3': 9}, 'output': 14}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 31, 'x2': 8, 'x3': 9});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 14;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 930,
        "question": 'When Sophie watches her nephew, she gets out a variety of toys for him. The bag of building blocks has 31 blocks in it. The bin of stuffed animals has 8 stuffed animals inside. The tower of stacking rings has 9 multicolored rings on it. Sophie recently bought a tube of bouncy balls, bringing her total number of toys for her nephew up to 62. How many bouncy balls came in the tube?',
        "answer": 14,
        "examples": [{'input': {'x1': 31, 'x2': 8, 'x3': 9}, 'output': 14}],
        });
    fs.writeFileSync('json/930.json', json);
}
doit();
