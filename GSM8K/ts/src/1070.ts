import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1070.json')) {
        console.log("Skipping 1070")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Dennis uses {{x1}} pound of butter for every dozen croissants that he makes.  He needs to make {{x2}} dozen croissants.  The grocery store currently has a promotion for buy one pound of butter get one half off.  If the butter costs $4.00 a pound, how much will it cost him to purchase {{x3}} pounds of butter?', [], [{'input': {'x1': 1, 'x2': 6, 'x3': 6}, 'output': 18}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 1, 'x2': 6, 'x3': 6});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 18;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1070,
        "question": 'Dennis uses 1 pound of butter for every dozen croissants that he makes.  He needs to make 6 dozen croissants.  The grocery store currently has a promotion for buy one pound of butter get one half off.  If the butter costs $4.00 a pound, how much will it cost him to purchase 6 pounds of butter?',
        "answer": 18,
        "examples": [{'input': {'x1': 1, 'x2': 6, 'x3': 6}, 'output': 18}],
        });
    fs.writeFileSync('json/1070.json', json);
}
doit();
