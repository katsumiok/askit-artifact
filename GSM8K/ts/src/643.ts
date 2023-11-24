import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/643.json')) {
        console.log("Skipping 643")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('A news website publishes an average of {{x1}} political and weather news articles every day. Its sister company publishes an average of {{x2}} business news articles daily. Calculate the total number of articles the two websites published together in February if there are {{x3}} days in the month.', [], [{'input': {'x1': 20, 'x2': 10, 'x3': 28}, 'output': 840}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 20, 'x2': 10, 'x3': 28});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 840;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 643,
        "question": 'A news website publishes an average of 20 political and weather news articles every day. Its sister company publishes an average of 10 business news articles daily. Calculate the total number of articles the two websites published together in February if there are 28 days in the month.',
        "answer": 840,
        "examples": [{'input': {'x1': 20, 'x2': 10, 'x3': 28}, 'output': 840}],
        });
    fs.writeFileSync('json/643.json', json);
}
doit();
