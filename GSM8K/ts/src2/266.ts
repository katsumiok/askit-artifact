import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/266.json')) {
        console.log("Skipping 266")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>("Mr. Tan sold his house for $400 000. He paid the transfer fees that amount to 3% of the selling price and also paid a brokerage fee that is 5% of the selling price. If he also paid $250 {{x1}} for the remaining loan amount of the house, how much is Mr. Tan's net proceeds from selling the house?", [], [{'input': {'x1': 0}, 'output': 118000}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 0});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 118000;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 266,
        "question": "Mr. Tan sold his house for $400 000. He paid the transfer fees that amount to 3% of the selling price and also paid a brokerage fee that is 5% of the selling price. If he also paid $250 000 for the remaining loan amount of the house, how much is Mr. Tan's net proceeds from selling the house?",
        "answer": 118000,
        "examples": [{'input': {'x1': 0}, 'output': 118000}],
        });
    fs.writeFileSync('json2/266.json', json);
}
doit();
