import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1072.json')) {
        console.log("Skipping 1072")
        return;
    }
    // measure time
    const f = define<number, {}>('Maggie spent a quarter of her money, while Riza spent one-third of her money. They each had $60. How much money do the two of them have left?', [], [{'input': {}, 'output': 85}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 85;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1072,
        "question": 'Maggie spent a quarter of her money, while Riza spent one-third of her money. They each had $60. How much money do the two of them have left?',
        "answer": 85,
        "examples": [{'input': {}, 'output': 85}],
        });
    fs.writeFileSync('json2/1072.json', json);
}
doit();
