import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/262.json')) {
        console.log("Skipping 262")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Maddison has {{x1}} boxes with {{x2}} marbles in each box. Then she gets {{x3}} marbles from her friend. How many marbles does she have now?', [], [{'input': {'x1': 5, 'x2': 50, 'x3': 20}, 'output': 270}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5, 'x2': 50, 'x3': 20});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 270;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 262,
        "question": 'Maddison has 5 boxes with 50 marbles in each box. Then she gets 20 marbles from her friend. How many marbles does she have now?',
        "answer": 270,
        "examples": [{'input': {'x1': 5, 'x2': 50, 'x3': 20}, 'output': 270}],
        });
    fs.writeFileSync('json2/262.json', json);
}
doit();
