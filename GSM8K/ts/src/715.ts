import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/715.json')) {
        console.log("Skipping 715")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('A company wanted to buy {{x1}} computers and had $700 for each computer. However, when they went to order, they realized the price of each computer was 10% higher than they had planned for. Calculate the total amount of money they paid to buy the computers at the new prices.', [], [{'input': {'x1': 500}, 'output': 385000}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 500});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 385000;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 715,
        "question": 'A company wanted to buy 500 computers and had $700 for each computer. However, when they went to order, they realized the price of each computer was 10% higher than they had planned for. Calculate the total amount of money they paid to buy the computers at the new prices.',
        "answer": 385000,
        "examples": [{'input': {'x1': 500}, 'output': 385000}],
        });
    fs.writeFileSync('json/715.json', json);
}
doit();
