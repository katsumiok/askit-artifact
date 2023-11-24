import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/132.json')) {
        console.log("Skipping 132")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Pam and Fred went to a carnival. Pam rode the roller coaster {{x1}} times while Fred rode it {{x2}} times. After that, each of them decided to ride the luge {{x3}} times. If each ride cost {{x4}} tickets, how many tickets did they use that day?', [], [{'input': {'x1': 2, 'x2': 4, 'x3': 2, 'x4': 6}, 'output': 60}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2, 'x2': 4, 'x3': 2, 'x4': 6});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 60;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 132,
        "question": 'Pam and Fred went to a carnival. Pam rode the roller coaster 2 times while Fred rode it 4 times. After that, each of them decided to ride the luge 2 times. If each ride cost 6 tickets, how many tickets did they use that day?',
        "answer": 60,
        "examples": [{'input': {'x1': 2, 'x2': 4, 'x3': 2, 'x4': 6}, 'output': 60}],
        });
    fs.writeFileSync('json2/132.json', json);
}
doit();
