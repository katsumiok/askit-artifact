import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1060.json')) {
        console.log("Skipping 1060")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Becky, Jake, and Silvia shared {{x1}} pizzas. Each pizza had {{x2}} slices. Becky ate {{x3}} more slices than Jake did. Silvia ate twice as many slices than Jake did. If Becky ate {{x4}} slices, how many total slices did they eat?', [], [{'input': {'x1': 4, 'x2': 8, 'x3': 3, 'x4': 10}, 'output': 31}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4, 'x2': 8, 'x3': 3, 'x4': 10});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 31;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1060,
        "question": 'Becky, Jake, and Silvia shared 4 pizzas. Each pizza had 8 slices. Becky ate 3 more slices than Jake did. Silvia ate twice as many slices than Jake did. If Becky ate 10 slices, how many total slices did they eat?',
        "answer": 31,
        "examples": [{'input': {'x1': 4, 'x2': 8, 'x3': 3, 'x4': 10}, 'output': 31}],
        });
    fs.writeFileSync('json/1060.json', json);
}
doit();
