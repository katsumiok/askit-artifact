import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1233.json')) {
        console.log("Skipping 1233")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Walter bought {{x1}} apples from the store. He ate 2/5 of them and gave his sister 25% of the remaining number. If he then sold the remaining apples to his uncle at $3 each, how much money did he receive?', [], [{'input': {'x1': 60}, 'output': 81}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 60});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 81;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1233,
        "question": 'Walter bought 60 apples from the store. He ate 2/5 of them and gave his sister 25% of the remaining number. If he then sold the remaining apples to his uncle at $3 each, how much money did he receive?',
        "answer": 81,
        "examples": [{'input': {'x1': 60}, 'output': 81}],
        });
    fs.writeFileSync('json2/1233.json', json);
}
doit();
