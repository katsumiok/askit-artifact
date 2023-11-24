import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/690.json')) {
        console.log("Skipping 690")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Rong has been saving {{x1}} coins in his piggy bank every month. Neil has been saving 2/5 times more coins in his piggy bank per month than Rong. How many coins are they having ten years after they started their savings?', [], [{'input': {'x1': 20}, 'output': 5760}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 20});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 5760;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 690,
        "question": 'Rong has been saving 20 coins in his piggy bank every month. Neil has been saving 2/5 times more coins in his piggy bank per month than Rong. How many coins are they having ten years after they started their savings?',
        "answer": 5760,
        "examples": [{'input': {'x1': 20}, 'output': 5760}],
        });
    fs.writeFileSync('json/690.json', json);
}
doit();
