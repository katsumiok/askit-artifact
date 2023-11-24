import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/576.json')) {
        console.log("Skipping 576")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>("Michael is replacing the carpet in his bedroom.\xa0 The new carpet he's chosen costs $12 per square\xa0foot, plus $2 per square foot for padding underneath.\xa0 His contractor charges $4 per square foot to remove the old carpet, and $34 per square foot to install the new carpet.\xa0 His bedroom measures {{x1}} feet by {{x2}} feet.\xa0 How much will it cost Michael to replace the carpet?", [], [{'input': {'x1': 18, 'x2': 12}, 'output': 11232}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 18, 'x2': 12});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 11232;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 576,
        "question": "Michael is replacing the carpet in his bedroom.\xa0 The new carpet he's chosen costs $12 per square\xa0foot, plus $2 per square foot for padding underneath.\xa0 His contractor charges $4 per square foot to remove the old carpet, and $34 per square foot to install the new carpet.\xa0 His bedroom measures 18 feet by 12 feet.\xa0 How much will it cost Michael to replace the carpet?",
        "answer": 11232,
        "examples": [{'input': {'x1': 18, 'x2': 12}, 'output': 11232}],
        });
    fs.writeFileSync('json2/576.json', json);
}
doit();
