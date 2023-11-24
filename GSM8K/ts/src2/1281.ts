import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1281.json')) {
        console.log("Skipping 1281")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Dexter has five pigs. Each one eats {{x1}} pounds of feed, twice a day. If Dexter ordered {{x2}} pounds of feed, how many pounds of feed is left after a week?', [], [{'input': {'x1': 4, 'x2': 300}, 'output': 20}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4, 'x2': 300});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 20;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1281,
        "question": 'Dexter has five pigs. Each one eats 4 pounds of feed, twice a day. If Dexter ordered 300 pounds of feed, how many pounds of feed is left after a week?',
        "answer": 20,
        "examples": [{'input': {'x1': 4, 'x2': 300}, 'output': 20}],
        });
    fs.writeFileSync('json2/1281.json', json);
}
doit();
