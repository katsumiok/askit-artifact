import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/257.json')) {
        console.log("Skipping 257")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>("Each solid 10-foot section of a redwood tree weighs {{x1}} pounds. Termites ate 30% of this redwood's wood. If the redwood is {{x2}} feet tall, how much does it weigh?", [], [{'input': {'x1': 400, 'x2': 200}, 'output': 5600}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 400, 'x2': 200});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 5600;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 257,
        "question": "Each solid 10-foot section of a redwood tree weighs 400 pounds. Termites ate 30% of this redwood's wood. If the redwood is 200 feet tall, how much does it weigh?",
        "answer": 5600,
        "examples": [{'input': {'x1': 400, 'x2': 200}, 'output': 5600}],
        });
    fs.writeFileSync('json2/257.json', json);
}
doit();
