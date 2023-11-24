import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/467.json')) {
        console.log("Skipping 467")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Bob is in charge of doing laundry for a large hotel. Each room has two sheets, one comforter, twice as many pillow cases as sheets and twice as many towels as pillow cases. How many pieces of laundry are there in {{x1}} rooms?', [], [{'input': {'x1': 80}, 'output': 1200}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 80});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 1200;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 467,
        "question": 'Bob is in charge of doing laundry for a large hotel. Each room has two sheets, one comforter, twice as many pillow cases as sheets and twice as many towels as pillow cases. How many pieces of laundry are there in 80 rooms?',
        "answer": 1200,
        "examples": [{'input': {'x1': 80}, 'output': 1200}],
        });
    fs.writeFileSync('json2/467.json', json);
}
doit();
