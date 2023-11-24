import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/875.json')) {
        console.log("Skipping 875")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Paul has {{x1}} marbles. His friend gave him {{x2}} marbles. Then, he lost 1/4 of his marbles. How many marbles does Paul have left?', [], [{'input': {'x1': 52, 'x2': 28}, 'output': 60}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 52, 'x2': 28});
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
        "id": 875,
        "question": 'Paul has 52 marbles. His friend gave him 28 marbles. Then, he lost 1/4 of his marbles. How many marbles does Paul have left?',
        "answer": 60,
        "examples": [{'input': {'x1': 52, 'x2': 28}, 'output': 60}],
        });
    fs.writeFileSync('json2/875.json', json);
}
doit();
