import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1184.json')) {
        console.log("Skipping 1184")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('To heat during the winter, Ali ordered {{x1}} kilos of coal. The coal is delivered in {{x2}} kg bags, costing $18 per unit. How much does his order cost?', [], [{'input': {'x1': 850, 'x2': 50}, 'output': 306}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 850, 'x2': 50});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 306;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1184,
        "question": 'To heat during the winter, Ali ordered 850 kilos of coal. The coal is delivered in 50 kg bags, costing $18 per unit. How much does his order cost?',
        "answer": 306,
        "examples": [{'input': {'x1': 850, 'x2': 50}, 'output': 306}],
        });
    fs.writeFileSync('json/1184.json', json);
}
doit();
