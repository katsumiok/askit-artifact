import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/525.json')) {
        console.log("Skipping 525")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Heather bought a jumbo bag of raisins with {{x1}} cups of raisins in it. She wants to make oatmeal cookies, granola, and snack mix with the raisins. A batch of oatmeal cookies takes 3/4 of a cup of raisins. How many batches of oatmeal cookies can Heather make if she divides the bag of raisins equally among the cookies, granola, and snack mix?', [], [{'input': {'x1': 27}, 'output': 12}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 27});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 12;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 525,
        "question": 'Heather bought a jumbo bag of raisins with 27 cups of raisins in it. She wants to make oatmeal cookies, granola, and snack mix with the raisins. A batch of oatmeal cookies takes 3/4 of a cup of raisins. How many batches of oatmeal cookies can Heather make if she divides the bag of raisins equally among the cookies, granola, and snack mix?',
        "answer": 12,
        "examples": [{'input': {'x1': 27}, 'output': 12}],
        });
    fs.writeFileSync('json/525.json', json);
}
doit();
