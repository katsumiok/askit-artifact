import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/215.json')) {
        console.log("Skipping 215")
        return;
    }
    // measure time
    const f = define<number, {}>('Lori wants to buy a $320.00 pair of shoes and a matching belt that is $32.00.  Her part-time job pays her $8.00 an hour.  How many hours will she have to work before she can make her purchase?', [], [{'input': {}, 'output': 44}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 44;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 215,
        "question": 'Lori wants to buy a $320.00 pair of shoes and a matching belt that is $32.00.  Her part-time job pays her $8.00 an hour.  How many hours will she have to work before she can make her purchase?',
        "answer": 44,
        "examples": [{'input': {}, 'output': 44}],
        });
    fs.writeFileSync('json2/215.json', json);
}
doit();
