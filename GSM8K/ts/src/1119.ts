import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1119.json')) {
        console.log("Skipping 1119")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>("Amalia, Megan, and Dior divided the home chores so that each person had something to do while the others were working. Amalia's work was to mow the lawn, which took her {{x1}} hours. Megan had to walk the dog and this took her {{x2}} hours longer than Amalia to complete her chore. Dior's work was to do laundry and she took well over {{x3}} hours longer than the time Amalia took to mow the lawn. Calculate the total time they all took to do their chores altogether.", [], [{'input': {'x1': 4, 'x2': 2, 'x3': 4}, 'output': 18}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4, 'x2': 2, 'x3': 4});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 18;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1119,
        "question": "Amalia, Megan, and Dior divided the home chores so that each person had something to do while the others were working. Amalia's work was to mow the lawn, which took her 4 hours. Megan had to walk the dog and this took her 2 hours longer than Amalia to complete her chore. Dior's work was to do laundry and she took well over 4 hours longer than the time Amalia took to mow the lawn. Calculate the total time they all took to do their chores altogether.",
        "answer": 18,
        "examples": [{'input': {'x1': 4, 'x2': 2, 'x3': 4}, 'output': 18}],
        });
    fs.writeFileSync('json/1119.json', json);
}
doit();
