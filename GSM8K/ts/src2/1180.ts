import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1180.json')) {
        console.log("Skipping 1180")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>("A company sold {{x1}} gallons of milk in jars to Mr. Marcellus' store at the cost of $3.5 per gallon. However, Mr. Marcellus later realized 2/5 of the amount of milk he purchased had passed the expiry date and could not be sold. He returned the sour milk to the company and ordered a refund. Calculate how much he got in refunds.", [], [{'input': {'x1': 4000}, 'output': 5600}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4000});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 5600;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1180,
        "question": "A company sold 4000 gallons of milk in jars to Mr. Marcellus' store at the cost of $3.5 per gallon. However, Mr. Marcellus later realized 2/5 of the amount of milk he purchased had passed the expiry date and could not be sold. He returned the sour milk to the company and ordered a refund. Calculate how much he got in refunds.",
        "answer": 5600,
        "examples": [{'input': {'x1': 4000}, 'output': 5600}],
        });
    fs.writeFileSync('json2/1180.json', json);
}
doit();
