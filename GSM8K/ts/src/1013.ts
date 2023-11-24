import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1013.json')) {
        console.log("Skipping 1013")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Janet gets a job as a waitress.  She makes $10 an hour from wages and another $15 an hour from tips.  She wants to save up 20% of the cost of a $10000 car for a downpayment.  If she works {{x1}} hours a week how many weeks will she need to work to save the down payment?', [], [{'input': {'x1': 40}, 'output': 2}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 40});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 2;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1013,
        "question": 'Janet gets a job as a waitress.  She makes $10 an hour from wages and another $15 an hour from tips.  She wants to save up 20% of the cost of a $10000 car for a downpayment.  If she works 40 hours a week how many weeks will she need to work to save the down payment?',
        "answer": 2,
        "examples": [{'input': {'x1': 40}, 'output': 2}],
        });
    fs.writeFileSync('json/1013.json', json);
}
doit();
