import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/454.json')) {
        console.log("Skipping 454")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Marin and his neighbor Nancy each eat {{x1}} apples a day. How many apples do they eat in {{x2}} days?', [], [{'input': {'x1': 4, 'x2': 30}, 'output': 150}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4, 'x2': 30});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 150;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 454,
        "question": 'Marin and his neighbor Nancy each eat 4 apples a day. How many apples do they eat in 30 days?',
        "answer": 150,
        "examples": [{'input': {'x1': 4, 'x2': 30}, 'output': 150}],
        });
    fs.writeFileSync('json/454.json', json);
}
doit();
