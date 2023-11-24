import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/502.json')) {
        console.log("Skipping 502")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number, x6: number}>('Cherrie wants to buy Christmas gifts for her {{x1}} friends. {{x2}} of her friends want {{x3}} gifts and the other {{x4}} friends want {{x5}} gifts for themselves. Cherrie goes ahead and buys them and decides to further surprise them by getting {{x6}} more random gifts. How many gifts did Cherrie buy in total?', [], [{'input': {'x1': 5, 'x2': 2, 'x3': 5, 'x4': 3, 'x5': 2, 'x6': 10}, 'output': 26}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5, 'x2': 2, 'x3': 5, 'x4': 3, 'x5': 2, 'x6': 10});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 26;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 502,
        "question": 'Cherrie wants to buy Christmas gifts for her 5 friends. 2 of her friends want 5 gifts and the other 3 friends want 2 gifts for themselves. Cherrie goes ahead and buys them and decides to further surprise them by getting 10 more random gifts. How many gifts did Cherrie buy in total?',
        "answer": 26,
        "examples": [{'input': {'x1': 5, 'x2': 2, 'x3': 5, 'x4': 3, 'x5': 2, 'x6': 10}, 'output': 26}],
        });
    fs.writeFileSync('json2/502.json', json);
}
doit();
