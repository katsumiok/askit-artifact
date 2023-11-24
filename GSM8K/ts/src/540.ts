import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/540.json')) {
        console.log("Skipping 540")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('$18 is shared among {{x1}} boys. The eldest added $5 to his share and added another $10 the following day. He later needed some money and spent $8 from his total so far. After saving some more, he was able to triple the amount he had left after spending the $8. How much does he have now?', [], [{'input': {'x1': 3}, 'output': 39}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 39;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 540,
        "question": '$18 is shared among 3 boys. The eldest added $5 to his share and added another $10 the following day. He later needed some money and spent $8 from his total so far. After saving some more, he was able to triple the amount he had left after spending the $8. How much does he have now?',
        "answer": 39,
        "examples": [{'input': {'x1': 3}, 'output': 39}],
        });
    fs.writeFileSync('json/540.json', json);
}
doit();
