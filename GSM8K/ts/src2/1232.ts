import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1232.json')) {
        console.log("Skipping 1232")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Eve had {{x1}} pieces of pomelos. After giving her friend some pomelos, Eve is left with 1/4 of the pomelos she originally had. How many pomelos did Eve give away?', [], [{'input': {'x1': 20}, 'output': 15}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 20});
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
        "id": 1232,
        "question": 'Eve had 20 pieces of pomelos. After giving her friend some pomelos, Eve is left with 1/4 of the pomelos she originally had. How many pomelos did Eve give away?',
        "answer": 15,
        "examples": [{'input': {'x1': 20}, 'output': 15}],
        });
    fs.writeFileSync('json2/1232.json', json);
}
doit();
