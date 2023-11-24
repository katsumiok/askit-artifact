import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/188.json')) {
        console.log("Skipping 188")
        return;
    }
    // measure time
    const f = define<number, {}>('A trader buys some bags of wheat from a farmer at a rate of $20 per bag. If it costs $2 to transport each bag from the farm to the warehouse, and the trader made a total profit of $400 after selling all the bags at a rate of $30 each, how many bags did he sell?', [], [{'input': {}, 'output': 50}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
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
        "id": 188,
        "question": 'A trader buys some bags of wheat from a farmer at a rate of $20 per bag. If it costs $2 to transport each bag from the farm to the warehouse, and the trader made a total profit of $400 after selling all the bags at a rate of $30 each, how many bags did he sell?',
        "answer": 50,
        "examples": [{'input': {}, 'output': 50}],
        });
    fs.writeFileSync('json/188.json', json);
}
doit();
