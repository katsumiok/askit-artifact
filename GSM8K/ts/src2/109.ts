import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/109.json')) {
        console.log("Skipping 109")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('A local gas station is selling gas for $3.00 a gallon.  An app company is offering $.20 cashback per gallon if you fill up at this station.  If someone buys {{x1}} gallons of gas, how much with their gas be, after the cashback rewards?', [], [{'input': {'x1': 10}, 'output': 28}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 10});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 28;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 109,
        "question": 'A local gas station is selling gas for $3.00 a gallon.  An app company is offering $.20 cashback per gallon if you fill up at this station.  If someone buys 10 gallons of gas, how much with their gas be, after the cashback rewards?',
        "answer": 28,
        "examples": [{'input': {'x1': 10}, 'output': 28}],
        });
    fs.writeFileSync('json2/109.json', json);
}
doit();
