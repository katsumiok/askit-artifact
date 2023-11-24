import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1078.json')) {
        console.log("Skipping 1078")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Melanie found a blueprint online for a toothpick sculpture she wanted to make. It requires {{x1}} toothpicks. Melanie’s mom puts toothpicks in her sandwiches when she serves them for lunch. Melanie started saving them and has saved {{x2}} toothpicks each week for the past {{x3}} weeks. If she continues saving toothpicks at the same rate, how many more weeks will it take her to collect {{x4}} toothpicks?', [], [{'input': {'x1': 200, 'x2': 10, 'x3': 12, 'x4': 200}, 'output': 8}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 200, 'x2': 10, 'x3': 12, 'x4': 200});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 8;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1078,
        "question": 'Melanie found a blueprint online for a toothpick sculpture she wanted to make. It requires 200 toothpicks. Melanie’s mom puts toothpicks in her sandwiches when she serves them for lunch. Melanie started saving them and has saved 10 toothpicks each week for the past 12 weeks. If she continues saving toothpicks at the same rate, how many more weeks will it take her to collect 200 toothpicks?',
        "answer": 8,
        "examples": [{'input': {'x1': 200, 'x2': 10, 'x3': 12, 'x4': 200}, 'output': 8}],
        });
    fs.writeFileSync('json2/1078.json', json);
}
doit();
