import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/884.json')) {
        console.log("Skipping 884")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Argo has {{x1}} toys. He gives {{x2}} toys to Alyssa, {{x3}} to Bonnie, and {{x4}} to Nicky. How many toys does Argo have now?', [], [{'input': {'x1': 200, 'x2': 40, 'x3': 80, 'x4': 30}, 'output': 50}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 200, 'x2': 40, 'x3': 80, 'x4': 30});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 50;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 884,
        "question": 'Argo has 200 toys. He gives 40 toys to Alyssa, 80 to Bonnie, and 30 to Nicky. How many toys does Argo have now?',
        "answer": 50,
        "examples": [{'input': {'x1': 200, 'x2': 40, 'x3': 80, 'x4': 30}, 'output': 50}],
        });
    fs.writeFileSync('json/884.json', json);
}
doit();
