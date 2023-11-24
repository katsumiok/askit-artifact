import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/527.json')) {
        console.log("Skipping 527")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('If one person can paint half a house in {{x1}} days, how many hours would it take for {{x2}} people to paint a whole house?', [], [{'input': {'x1': 5, 'x2': 5}, 'output': 48}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5, 'x2': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 48;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 527,
        "question": 'If one person can paint half a house in 5 days, how many hours would it take for 5 people to paint a whole house?',
        "answer": 48,
        "examples": [{'input': {'x1': 5, 'x2': 5}, 'output': 48}],
        });
    fs.writeFileSync('json2/527.json', json);
}
doit();
