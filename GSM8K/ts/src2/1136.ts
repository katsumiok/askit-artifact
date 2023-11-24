import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1136.json')) {
        console.log("Skipping 1136")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Bob has a certain number of marbles. If he receives {{x1}} dozen more marbles, he will have {{x2}} marbles. If he loses {{x3}} of the marbles he has, how many marbles will Bob have?', [], [{'input': {'x1': 2, 'x2': 60, 'x3': 10}, 'output': 26}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2, 'x2': 60, 'x3': 10});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 26;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1136,
        "question": 'Bob has a certain number of marbles. If he receives 2 dozen more marbles, he will have 60 marbles. If he loses 10 of the marbles he has, how many marbles will Bob have?',
        "answer": 26,
        "examples": [{'input': {'x1': 2, 'x2': 60, 'x3': 10}, 'output': 26}],
        });
    fs.writeFileSync('json2/1136.json', json);
}
doit();
