import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/65.json')) {
        console.log("Skipping 65")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Jim spends {{x1}} hours watching TV and then decides to go to bed and reads for half as long.  He does this {{x2}} times a week.  How many hours does he spend on TV and reading in {{x3}} weeks?', [], [{'input': {'x1': 2, 'x2': 3, 'x3': 4}, 'output': 36}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2, 'x2': 3, 'x3': 4});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 36;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 65,
        "question": 'Jim spends 2 hours watching TV and then decides to go to bed and reads for half as long.  He does this 3 times a week.  How many hours does he spend on TV and reading in 4 weeks?',
        "answer": 36,
        "examples": [{'input': {'x1': 2, 'x2': 3, 'x3': 4}, 'output': 36}],
        });
    fs.writeFileSync('json/65.json', json);
}
doit();
