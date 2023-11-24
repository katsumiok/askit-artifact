import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/685.json')) {
        console.log("Skipping 685")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Catherine goes to the grocery store. She buys {{x1}} kilo of apples for $4, {{x2}} kilos of bananas for $2 per kilo, and {{x3}} kilos of oranges for $3 per kilo. How many dollars does she pay in total?', [], [{'input': {'x1': 1, 'x2': 2, 'x3': 2}, 'output': 14}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 1, 'x2': 2, 'x3': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 14;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 685,
        "question": 'Catherine goes to the grocery store. She buys 1 kilo of apples for $4, 2 kilos of bananas for $2 per kilo, and 2 kilos of oranges for $3 per kilo. How many dollars does she pay in total?',
        "answer": 14,
        "examples": [{'input': {'x1': 1, 'x2': 2, 'x3': 2}, 'output': 14}],
        });
    fs.writeFileSync('json2/685.json', json);
}
doit();
