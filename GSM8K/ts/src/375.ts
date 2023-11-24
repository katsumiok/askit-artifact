import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/375.json')) {
        console.log("Skipping 375")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Mrs. Sherman made a dozen bread rolls for breakfast. After feeding her {{x1}} children with one each, she broke each of the remaining rolls into {{x2}} pieces and fed them to the chickens. How many pieces of rolls did she feed to the chickens?', [], [{'input': {'x1': 6, 'x2': 8}, 'output': 48}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 6, 'x2': 8});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 48;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 375,
        "question": 'Mrs. Sherman made a dozen bread rolls for breakfast. After feeding her 6 children with one each, she broke each of the remaining rolls into 8 pieces and fed them to the chickens. How many pieces of rolls did she feed to the chickens?',
        "answer": 48,
        "examples": [{'input': {'x1': 6, 'x2': 8}, 'output': 48}],
        });
    fs.writeFileSync('json/375.json', json);
}
doit();
