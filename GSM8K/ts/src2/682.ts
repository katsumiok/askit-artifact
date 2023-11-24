import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/682.json')) {
        console.log("Skipping 682")
        return;
    }
    // measure time
    const f = define<number, {}>('Shania is designing her own dress, and decides to make it a longer dress by extending the dress by 50% of its original length. She also adds 20cm to the bottom of the dress with a lace trim. If the final design is 140cm long then how long, in centimeters, was the dress in its original design?', [], [{'input': {}, 'output': 80}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 80;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 682,
        "question": 'Shania is designing her own dress, and decides to make it a longer dress by extending the dress by 50% of its original length. She also adds 20cm to the bottom of the dress with a lace trim. If the final design is 140cm long then how long, in centimeters, was the dress in its original design?',
        "answer": 80,
        "examples": [{'input': {}, 'output': 80}],
        });
    fs.writeFileSync('json2/682.json', json);
}
doit();
