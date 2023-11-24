import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/721.json')) {
        console.log("Skipping 721")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number}>('Helga was the fastest clog dancer in all of Slovenia. With both hands at her sides, she could tap her right foot at a rate of {{x1}} taps per minute, while simultaneously tapping her left foot at a rate of {{x2}} taps per minute.  When she raised her arms, her tap rate slowed down to {{x3}} taps per minute with each foot.  If she dances a total of {{x4}} minutes, with her arms raised during only {{x5}} of those minutes, what would be the combined total number of times that she taps both of her feet?', [], [{'input': {'x1': 300, 'x2': 250, 'x3': 200, 'x4': 5, 'x5': 2}, 'output': 2450}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 300, 'x2': 250, 'x3': 200, 'x4': 5, 'x5': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 2450;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 721,
        "question": 'Helga was the fastest clog dancer in all of Slovenia. With both hands at her sides, she could tap her right foot at a rate of 300 taps per minute, while simultaneously tapping her left foot at a rate of 250 taps per minute.  When she raised her arms, her tap rate slowed down to 200 taps per minute with each foot.  If she dances a total of 5 minutes, with her arms raised during only 2 of those minutes, what would be the combined total number of times that she taps both of her feet?',
        "answer": 2450,
        "examples": [{'input': {'x1': 300, 'x2': 250, 'x3': 200, 'x4': 5, 'x5': 2}, 'output': 2450}],
        });
    fs.writeFileSync('json/721.json', json);
}
doit();
