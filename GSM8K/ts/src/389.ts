import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/389.json')) {
        console.log("Skipping 389")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('David and Dasha went to the carnival, where there are {{x1}} rides.  Each ride costs {{x2}} ride tickets at $2 per ticket.  You can also buy a ride bracelet for $30 which gives you {{x3}} rides.  If David buys a ride bracelet and Dasha buys tickets, and they ride all {{x4}} rides, how much money does David save?', [], [{'input': {'x1': 9, 'x2': 2, 'x3': 9, 'x4': 9}, 'output': 6}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 9, 'x2': 2, 'x3': 9, 'x4': 9});
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
        "id": 389,
        "question": 'David and Dasha went to the carnival, where there are 9 rides.  Each ride costs 2 ride tickets at $2 per ticket.  You can also buy a ride bracelet for $30 which gives you 9 rides.  If David buys a ride bracelet and Dasha buys tickets, and they ride all 9 rides, how much money does David save?',
        "answer": 6,
        "examples": [{'input': {'x1': 9, 'x2': 2, 'x3': 9, 'x4': 9}, 'output': 6}],
        });
    fs.writeFileSync('json/389.json', json);
}
doit();
