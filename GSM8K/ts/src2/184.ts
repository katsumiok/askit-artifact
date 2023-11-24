import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/184.json')) {
        console.log("Skipping 184")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Jerry is rolling a six-sided die. How much more likely is it (expressed as a percentage) that he rolls a number greater than {{x1}} than that he rolls two even numbers in a row?', [], [{'input': {'x1': 3}, 'output': 25}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 25;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 184,
        "question": 'Jerry is rolling a six-sided die. How much more likely is it (expressed as a percentage) that he rolls a number greater than 3 than that he rolls two even numbers in a row?',
        "answer": 25,
        "examples": [{'input': {'x1': 3}, 'output': 25}],
        });
    fs.writeFileSync('json2/184.json', json);
}
doit();
