import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1038.json')) {
        console.log("Skipping 1038")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Jim decides to go to college to earn some more money.  It takes him {{x1}} years to finish and he gets $50,000 in loans per year.  If he had a 25k a year job before college and his college degree tripled his income, how long would it take to earn the money equivalent to the loans and the money lost from not working while in school.', [], [{'input': {'x1': 4}, 'output': 4}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 4;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1038,
        "question": 'Jim decides to go to college to earn some more money.  It takes him 4 years to finish and he gets $50,000 in loans per year.  If he had a 25k a year job before college and his college degree tripled his income, how long would it take to earn the money equivalent to the loans and the money lost from not working while in school.',
        "answer": 4,
        "examples": [{'input': {'x1': 4}, 'output': 4}],
        });
    fs.writeFileSync('json2/1038.json', json);
}
doit();
