import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/638.json')) {
        console.log("Skipping 638")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('In a grocery store, four apples cost $5.20, and three oranges cost $3.30. How much will Clyde pay for {{x1}} apples and {{x2}} oranges?', [], [{'input': {'x1': 5, 'x2': 5}, 'output': 12}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5, 'x2': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 12;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 638,
        "question": 'In a grocery store, four apples cost $5.20, and three oranges cost $3.30. How much will Clyde pay for 5 apples and 5 oranges?',
        "answer": 12,
        "examples": [{'input': {'x1': 5, 'x2': 5}, 'output': 12}],
        });
    fs.writeFileSync('json2/638.json', json);
}
doit();
