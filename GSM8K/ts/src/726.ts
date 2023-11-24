import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/726.json')) {
        console.log("Skipping 726")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Topher, the green giant, wears enormous shoes.  The length of one of his shoes is {{x1}} inches longer than {{x2}} times the length of one of Bobby’s shoes.  If the length of one of Topher’s shoes is 8-feet and 4-inches, how long, in inches, is one of Bobby’s shoes?', [], [{'input': {'x1': 10, 'x2': 9}, 'output': 10}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 10, 'x2': 9});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 10;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 726,
        "question": 'Topher, the green giant, wears enormous shoes.  The length of one of his shoes is 10 inches longer than 9 times the length of one of Bobby’s shoes.  If the length of one of Topher’s shoes is 8-feet and 4-inches, how long, in inches, is one of Bobby’s shoes?',
        "answer": 10,
        "examples": [{'input': {'x1': 10, 'x2': 9}, 'output': 10}],
        });
    fs.writeFileSync('json/726.json', json);
}
doit();
