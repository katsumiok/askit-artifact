import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/913.json')) {
        console.log("Skipping 913")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Benny threw bologna at his balloons.  He threw two pieces of bologna at each red balloon and three pieces of bologna at each yellow balloon.  If Benny threw {{x1}} pieces of bologna at a bundle of red and yellow balloons, and twenty of the balloons were red, then how many of the balloons in the bundle were yellow?', [], [{'input': {'x1': 58}, 'output': 6}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 58});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 6;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 913,
        "question": 'Benny threw bologna at his balloons.  He threw two pieces of bologna at each red balloon and three pieces of bologna at each yellow balloon.  If Benny threw 58 pieces of bologna at a bundle of red and yellow balloons, and twenty of the balloons were red, then how many of the balloons in the bundle were yellow?',
        "answer": 6,
        "examples": [{'input': {'x1': 58}, 'output': 6}],
        });
    fs.writeFileSync('json2/913.json', json);
}
doit();
