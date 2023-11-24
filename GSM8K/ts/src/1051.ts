import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1051.json')) {
        console.log("Skipping 1051")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Ingrid drinks {{x1}} cups of water every day.  If there are {{x2}} cups in a gallon, how many gallons of water does she drink in {{x3}} days?', [], [{'input': {'x1': 8, 'x2': 16, 'x3': 30}, 'output': 15}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 8, 'x2': 16, 'x3': 30});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 15;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1051,
        "question": 'Ingrid drinks 8 cups of water every day.  If there are 16 cups in a gallon, how many gallons of water does she drink in 30 days?',
        "answer": 15,
        "examples": [{'input': {'x1': 8, 'x2': 16, 'x3': 30}, 'output': 15}],
        });
    fs.writeFileSync('json/1051.json', json);
}
doit();
