import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/782.json')) {
        console.log("Skipping 782")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Chase and Rider can ride their bikes thrice a day for {{x1}} days; but on two other days, they ride twice the times they do on usual days. How many times do they ride their bikes a week?', [], [{'input': {'x1': 5}, 'output': 54}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 54;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 782,
        "question": 'Chase and Rider can ride their bikes thrice a day for 5 days; but on two other days, they ride twice the times they do on usual days. How many times do they ride their bikes a week?',
        "answer": 54,
        "examples": [{'input': {'x1': 5}, 'output': 54}],
        });
    fs.writeFileSync('json2/782.json', json);
}
doit();
