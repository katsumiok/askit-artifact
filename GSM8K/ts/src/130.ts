import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/130.json')) {
        console.log("Skipping 130")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>("Nissa hires {{x1}} seasonal workers to play elves in her department store's Santa village. A third of the elves quit after children vomit on them, then {{x2}} of the remaining elves quit after kids kick their shins. How many elves are left?", [], [{'input': {'x1': 60, 'x2': 10}, 'output': 30}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 60, 'x2': 10});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 30;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 130,
        "question": "Nissa hires 60 seasonal workers to play elves in her department store's Santa village. A third of the elves quit after children vomit on them, then 10 of the remaining elves quit after kids kick their shins. How many elves are left?",
        "answer": 30,
        "examples": [{'input': {'x1': 60, 'x2': 10}, 'output': 30}],
        });
    fs.writeFileSync('json/130.json', json);
}
doit();
