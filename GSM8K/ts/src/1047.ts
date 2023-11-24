import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1047.json')) {
        console.log("Skipping 1047")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Rory is retrieving tennis balls from the court after a tennis match. In the first of three sets, he had to retrieve four more balls than in the second set. In the third set, he retrieved half as many balls as in the second. He retrieved {{x1}} tennis balls in all. How many tennis balls did he retrieve in the first set of the match?', [], [{'input': {'x1': 19}, 'output': 10}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 19});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 10;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1047,
        "question": 'Rory is retrieving tennis balls from the court after a tennis match. In the first of three sets, he had to retrieve four more balls than in the second set. In the third set, he retrieved half as many balls as in the second. He retrieved 19 tennis balls in all. How many tennis balls did he retrieve in the first set of the match?',
        "answer": 10,
        "examples": [{'input': {'x1': 19}, 'output': 10}],
        });
    fs.writeFileSync('json/1047.json', json);
}
doit();
