import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/828.json')) {
        console.log("Skipping 828")
        return;
    }
    // measure time
    const f = define<number, {}>('Mulan has $40. Her father gave her $100. She buys two pairs of jeans at $30 each and a bag for $20. How much money does Mulan have left?', [], [{'input': {}, 'output': 60}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 60;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 828,
        "question": 'Mulan has $40. Her father gave her $100. She buys two pairs of jeans at $30 each and a bag for $20. How much money does Mulan have left?',
        "answer": 60,
        "examples": [{'input': {}, 'output': 60}],
        });
    fs.writeFileSync('json/828.json', json);
}
doit();
