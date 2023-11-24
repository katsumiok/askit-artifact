import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1024.json')) {
        console.log("Skipping 1024")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Suzanne sold {{x1}} cookies for $1 each and {{x2}} cupcakes for $4 each. She gave her two sisters $10 each for helping her. How much money does she have left from her earnings?', [], [{'input': {'x1': 80, 'x2': 60}, 'output': 300}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 80, 'x2': 60});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 300;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1024,
        "question": 'Suzanne sold 80 cookies for $1 each and 60 cupcakes for $4 each. She gave her two sisters $10 each for helping her. How much money does she have left from her earnings?',
        "answer": 300,
        "examples": [{'input': {'x1': 80, 'x2': 60}, 'output': 300}],
        });
    fs.writeFileSync('json/1024.json', json);
}
doit();
