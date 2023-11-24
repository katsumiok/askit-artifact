import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/711.json')) {
        console.log("Skipping 711")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('The ice cream parlor was offering a deal, buy {{x1}} scoops of ice cream, get {{x2}} scoop free.  Each scoop cost $1.50.  If Erin had  $6.00, how many scoops of ice cream should she buy?', [], [{'input': {'x1': 2, 'x2': 1}, 'output': 6}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2, 'x2': 1});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 6;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 711,
        "question": 'The ice cream parlor was offering a deal, buy 2 scoops of ice cream, get 1 scoop free.  Each scoop cost $1.50.  If Erin had  $6.00, how many scoops of ice cream should she buy?',
        "answer": 6,
        "examples": [{'input': {'x1': 2, 'x2': 1}, 'output': 6}],
        });
    fs.writeFileSync('json2/711.json', json);
}
doit();
