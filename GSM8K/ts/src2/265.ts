import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/265.json')) {
        console.log("Skipping 265")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>("Mrs. Cruz is looking for a house that will not go beyond her $400 {{x1}} budget. She saw a property that has a selling price of $350 000. On top of that, the buyer has to pay a brokerage fee which is 5% of the selling price, and also the transfer fee that is 12% of the selling price. How much more is the total price of the house than Mrs. Cruz's budget?", [], [{'input': {'x1': 0}, 'output': 9500}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 0});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 9500;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 265,
        "question": "Mrs. Cruz is looking for a house that will not go beyond her $400 000 budget. She saw a property that has a selling price of $350 000. On top of that, the buyer has to pay a brokerage fee which is 5% of the selling price, and also the transfer fee that is 12% of the selling price. How much more is the total price of the house than Mrs. Cruz's budget?",
        "answer": 9500,
        "examples": [{'input': {'x1': 0}, 'output': 9500}],
        });
    fs.writeFileSync('json2/265.json', json);
}
doit();
