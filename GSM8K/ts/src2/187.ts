import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/187.json')) {
        console.log("Skipping 187")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Mandy owes Benedict $100. They agreed to have monthly interest of 2%. If Mandy was able to pay it after {{x1}} months, how much should she give to Benedict?', [], [{'input': {'x1': 3}, 'output': 106}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 106;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 187,
        "question": 'Mandy owes Benedict $100. They agreed to have monthly interest of 2%. If Mandy was able to pay it after 3 months, how much should she give to Benedict?',
        "answer": 106,
        "examples": [{'input': {'x1': 3}, 'output': 106}],
        });
    fs.writeFileSync('json2/187.json', json);
}
doit();
