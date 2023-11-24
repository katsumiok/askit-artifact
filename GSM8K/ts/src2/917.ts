import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/917.json')) {
        console.log("Skipping 917")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Kira bought {{x1}} apples, {{x2}} bananas and {{x3}} oranges at the grocery store. Lola ate {{x4}} pieces of the fruit. How many pieces are left?', [], [{'input': {'x1': 3, 'x2': 5, 'x3': 6, 'x4': 2}, 'output': 12}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3, 'x2': 5, 'x3': 6, 'x4': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 12;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 917,
        "question": 'Kira bought 3 apples, 5 bananas and 6 oranges at the grocery store. Lola ate 2 pieces of the fruit. How many pieces are left?',
        "answer": 12,
        "examples": [{'input': {'x1': 3, 'x2': 5, 'x3': 6, 'x4': 2}, 'output': 12}],
        });
    fs.writeFileSync('json2/917.json', json);
}
doit();
