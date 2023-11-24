import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/71.json')) {
        console.log("Skipping 71")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Kelian has two recipes for preparing dishes, one having {{x1}} instructions and the second one having twice as many instructions as the first one. How many instructions does Kelian have to read to prepare the two dishes?', [], [{'input': {'x1': 20}, 'output': 60}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 20});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 60;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 71,
        "question": 'Kelian has two recipes for preparing dishes, one having 20 instructions and the second one having twice as many instructions as the first one. How many instructions does Kelian have to read to prepare the two dishes?',
        "answer": 60,
        "examples": [{'input': {'x1': 20}, 'output': 60}],
        });
    fs.writeFileSync('json2/71.json', json);
}
doit();
