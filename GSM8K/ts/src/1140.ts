import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1140.json')) {
        console.log("Skipping 1140")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number, x6: number}>('Gomer ate {{x1}} less than {{x2}} scoops of mashed potatoes.  If it takes {{x3}} less than {{x4}} potatoes to make {{x5}} less than {{x6}} scoops of mashed potatoes, how many potatoes did Gomer eat?', [], [{'input': {'x1': 5, 'x2': 23, 'x3': 3, 'x4': 6, 'x5': 1, 'x6': 3}, 'output': 27}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5, 'x2': 23, 'x3': 3, 'x4': 6, 'x5': 1, 'x6': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 27;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1140,
        "question": 'Gomer ate 5 less than 23 scoops of mashed potatoes.  If it takes 3 less than 6 potatoes to make 1 less than 3 scoops of mashed potatoes, how many potatoes did Gomer eat?',
        "answer": 27,
        "examples": [{'input': {'x1': 5, 'x2': 23, 'x3': 3, 'x4': 6, 'x5': 1, 'x6': 3}, 'output': 27}],
        });
    fs.writeFileSync('json/1140.json', json);
}
doit();
