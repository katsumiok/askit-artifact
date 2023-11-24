import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/175.json')) {
        console.log("Skipping 175")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Juan and his brother Carlos are selling lemonade. For each gallon they make it costs $3 for lemons and $2 for sugar. They sell each glass for $0.50 and get {{x1}} glasses per gallon. If they made $25 in profit, how much did they spend on lemons?', [], [{'input': {'x1': 20}, 'output': 15}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 20});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 15;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 175,
        "question": 'Juan and his brother Carlos are selling lemonade. For each gallon they make it costs $3 for lemons and $2 for sugar. They sell each glass for $0.50 and get 20 glasses per gallon. If they made $25 in profit, how much did they spend on lemons?',
        "answer": 15,
        "examples": [{'input': {'x1': 20}, 'output': 15}],
        });
    fs.writeFileSync('json2/175.json', json);
}
doit();
