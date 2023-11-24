import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1123.json')) {
        console.log("Skipping 1123")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Elijah has one dog that is one-fourth the weight of Kory’s dog and another dog that is half the weight of Kory’s dog. If Kory’s dog is {{x1}} pounds, how much do Elijah and Kory’s dogs weigh altogether, in pounds?', [], [{'input': {'x1': 60}, 'output': 105}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 60});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 105;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1123,
        "question": 'Elijah has one dog that is one-fourth the weight of Kory’s dog and another dog that is half the weight of Kory’s dog. If Kory’s dog is 60 pounds, how much do Elijah and Kory’s dogs weigh altogether, in pounds?',
        "answer": 105,
        "examples": [{'input': {'x1': 60}, 'output': 105}],
        });
    fs.writeFileSync('json2/1123.json', json);
}
doit();
