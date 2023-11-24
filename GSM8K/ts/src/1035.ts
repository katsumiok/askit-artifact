import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1035.json')) {
        console.log("Skipping 1035")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>("Richard wants to make a video to share online of him doing a science experiment that creates a fountain of diet soda after placing a specific branded candy inside it. Richard's driveway is {{x1}} feet wide and he wants to put a bottle of soda every {{x2}} feet of the driveway. After starting at the first bottle, it will take Richard {{x3}} seconds to go from one soda bottle to the next, dropping the candy in. How many seconds total will it take Richard to set off all the soda fountains?", [], [{'input': {'x1': 24, 'x2': 3, 'x3': 5}, 'output': 35}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 24, 'x2': 3, 'x3': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 35;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1035,
        "question": "Richard wants to make a video to share online of him doing a science experiment that creates a fountain of diet soda after placing a specific branded candy inside it. Richard's driveway is 24 feet wide and he wants to put a bottle of soda every 3 feet of the driveway. After starting at the first bottle, it will take Richard 5 seconds to go from one soda bottle to the next, dropping the candy in. How many seconds total will it take Richard to set off all the soda fountains?",
        "answer": 35,
        "examples": [{'input': {'x1': 24, 'x2': 3, 'x3': 5}, 'output': 35}],
        });
    fs.writeFileSync('json/1035.json', json);
}
doit();
