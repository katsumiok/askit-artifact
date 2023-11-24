import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/570.json')) {
        console.log("Skipping 570")
        return;
    }
    // measure time
    const f = define<number, {}>('Peter has $70 and wishes to spend an equal amount each day for one week. From Sunday through Wednesday, he spent his money on wooden action figures which cost $5 each. For the rest of the week, he will buy plastic action figures which cost $2 each. How many total action figures will he have by the end of the week?', [], [{'input': {}, 'output': 23}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 23;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 570,
        "question": 'Peter has $70 and wishes to spend an equal amount each day for one week. From Sunday through Wednesday, he spent his money on wooden action figures which cost $5 each. For the rest of the week, he will buy plastic action figures which cost $2 each. How many total action figures will he have by the end of the week?',
        "answer": 23,
        "examples": [{'input': {}, 'output': 23}],
        });
    fs.writeFileSync('json2/570.json', json);
}
doit();
