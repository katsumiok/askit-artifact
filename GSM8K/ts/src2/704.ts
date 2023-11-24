import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/704.json')) {
        console.log("Skipping 704")
        return;
    }
    // measure time
    const f = define<number, {}>('Gerald and Julia divided $100 in the ratio 3:2. If Gerald spent $10 on a book, how much money did he have left?', [], [{'input': {}, 'output': 50}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 50;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 704,
        "question": 'Gerald and Julia divided $100 in the ratio 3:2. If Gerald spent $10 on a book, how much money did he have left?',
        "answer": 50,
        "examples": [{'input': {}, 'output': 50}],
        });
    fs.writeFileSync('json2/704.json', json);
}
doit();
