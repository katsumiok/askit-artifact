import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/200.json')) {
        console.log("Skipping 200")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Baldur gets water from a well. He gets {{x1}} pails of water every morning and {{x2}} pails of water every afternoon. If each pail contains {{x3}} liters of water, how many liters of water does he get every day?', [], [{'input': {'x1': 5, 'x2': 6, 'x3': 5}, 'output': 55}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5, 'x2': 6, 'x3': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 55;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 200,
        "question": 'Baldur gets water from a well. He gets 5 pails of water every morning and 6 pails of water every afternoon. If each pail contains 5 liters of water, how many liters of water does he get every day?',
        "answer": 55,
        "examples": [{'input': {'x1': 5, 'x2': 6, 'x3': 5}, 'output': 55}],
        });
    fs.writeFileSync('json2/200.json', json);
}
doit();
