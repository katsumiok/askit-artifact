import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/904.json')) {
        console.log("Skipping 904")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('There are {{x1}} Fast and the Furious movies, Deepa has seen each one in the theatre three times. She has spent $216 seeing these movies. What is the average price she paid per ticket?', [], [{'input': {'x1': 9}, 'output': 8}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 9});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 8;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 904,
        "question": 'There are 9 Fast and the Furious movies, Deepa has seen each one in the theatre three times. She has spent $216 seeing these movies. What is the average price she paid per ticket?',
        "answer": 8,
        "examples": [{'input': {'x1': 9}, 'output': 8}],
        });
    fs.writeFileSync('json/904.json', json);
}
doit();
