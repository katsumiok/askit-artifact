import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/261.json')) {
        console.log("Skipping 261")
        return;
    }
    // measure time
    const f = define<number, {}>('There are 9,300 pennies in a cup. What is the total dollar amount in a stack that contains two thirds of the pennies in the cup?', [], [{'input': {}, 'output': 62}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 62;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 261,
        "question": 'There are 9,300 pennies in a cup. What is the total dollar amount in a stack that contains two thirds of the pennies in the cup?',
        "answer": 62,
        "examples": [{'input': {}, 'output': 62}],
        });
    fs.writeFileSync('json2/261.json', json);
}
doit();
