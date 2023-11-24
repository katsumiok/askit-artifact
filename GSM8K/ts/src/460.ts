import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/460.json')) {
        console.log("Skipping 460")
        return;
    }
    // measure time
    const f = define<number, {}>('Grayson recycles cans and bottles for money each week. An aluminum can is worth two cents and a plastic bottle is worth three cents. She drinks three aluminum cans of soda and five plastic bottles of water a week. How many cents does Grayson earn from recycling in a four-week month?', [], [{'input': {}, 'output': 84}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 84;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 460,
        "question": 'Grayson recycles cans and bottles for money each week. An aluminum can is worth two cents and a plastic bottle is worth three cents. She drinks three aluminum cans of soda and five plastic bottles of water a week. How many cents does Grayson earn from recycling in a four-week month?',
        "answer": 84,
        "examples": [{'input': {}, 'output': 84}],
        });
    fs.writeFileSync('json/460.json', json);
}
doit();
