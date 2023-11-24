import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/533.json')) {
        console.log("Skipping 533")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Errol bought a computer, {{x1}} monitors, and a printer for $2,400. He paid $400 less for the printer than the computer. If the computer cost $1,100, how much did one monitor cost, in dollars?', [], [{'input': {'x1': 2}, 'output': 300}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 300;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 533,
        "question": 'Errol bought a computer, 2 monitors, and a printer for $2,400. He paid $400 less for the printer than the computer. If the computer cost $1,100, how much did one monitor cost, in dollars?',
        "answer": 300,
        "examples": [{'input': {'x1': 2}, 'output': 300}],
        });
    fs.writeFileSync('json/533.json', json);
}
doit();
