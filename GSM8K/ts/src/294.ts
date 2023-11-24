import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/294.json')) {
        console.log("Skipping 294")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Will buys {{x1}} oranges. When he gets home, he asks his {{x2}} sons to wash as many oranges as they are years old. The oldest son is {{x3}} years old, the youngest is half as old as the oldest. How many oranges are left unwashed?', [], [{'input': {'x1': 15, 'x2': 2, 'x3': 8}, 'output': 3}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 15, 'x2': 2, 'x3': 8});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 3;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 294,
        "question": 'Will buys 15 oranges. When he gets home, he asks his 2 sons to wash as many oranges as they are years old. The oldest son is 8 years old, the youngest is half as old as the oldest. How many oranges are left unwashed?',
        "answer": 3,
        "examples": [{'input': {'x1': 15, 'x2': 2, 'x3': 8}, 'output': 3}],
        });
    fs.writeFileSync('json/294.json', json);
}
doit();
