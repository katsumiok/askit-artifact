import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/371.json')) {
        console.log("Skipping 371")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>("A shoe store was having a weekend sale on a brand of popular tennis shoes. On Friday the store sold {{x1}} pairs of tennis shoes. The next day they sold double that number of shoes. On the last day of the sale they sold one-half the amount that they did the day before, but six people returned their pairs because they didn't fit. How many tennis shoes were sold by the end of the sale?", [], [{'input': {'x1': 14}, 'output': 50}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 14});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 50;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 371,
        "question": "A shoe store was having a weekend sale on a brand of popular tennis shoes. On Friday the store sold 14 pairs of tennis shoes. The next day they sold double that number of shoes. On the last day of the sale they sold one-half the amount that they did the day before, but six people returned their pairs because they didn't fit. How many tennis shoes were sold by the end of the sale?",
        "answer": 50,
        "examples": [{'input': {'x1': 14}, 'output': 50}],
        });
    fs.writeFileSync('json2/371.json', json);
}
doit();
