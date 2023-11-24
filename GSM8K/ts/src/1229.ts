import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1229.json')) {
        console.log("Skipping 1229")
        return;
    }
    // measure time
    const f = define<number, {}>('In November, a toy was $40. In December, the price increased by 80%. In January, the price decreased by 50%. What was the price of the toy after it was discounted in January?', [], [{'input': {}, 'output': 36}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 36;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1229,
        "question": 'In November, a toy was $40. In December, the price increased by 80%. In January, the price decreased by 50%. What was the price of the toy after it was discounted in January?',
        "answer": 36,
        "examples": [{'input': {}, 'output': 36}],
        });
    fs.writeFileSync('json/1229.json', json);
}
doit();
