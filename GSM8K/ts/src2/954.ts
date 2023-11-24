import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/954.json')) {
        console.log("Skipping 954")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Jonathan has 2/3 as many measuring spoons as measuring cups. If he has two dozen cups and gifts Pedro {{x1}} measuring spoons for his birthday, calculate the total number of utensils Jonathan has remaining.', [], [{'input': {'x1': 6}, 'output': 34}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 6});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 34;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 954,
        "question": 'Jonathan has 2/3 as many measuring spoons as measuring cups. If he has two dozen cups and gifts Pedro 6 measuring spoons for his birthday, calculate the total number of utensils Jonathan has remaining.',
        "answer": 34,
        "examples": [{'input': {'x1': 6}, 'output': 34}],
        });
    fs.writeFileSync('json2/954.json', json);
}
doit();
