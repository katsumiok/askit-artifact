import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1081.json')) {
        console.log("Skipping 1081")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>("Frankie and Binkie went bowling together.  Frankie's score was {{x1}} better more than twice as high as Binkie's. If Binkie bowled a score of 90, what was Frankie's score?", [], [{'input': {'x1': 15}, 'output': 195}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 15});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 195;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1081,
        "question": "Frankie and Binkie went bowling together.  Frankie's score was 15 better more than twice as high as Binkie's. If Binkie bowled a score of 90, what was Frankie's score?",
        "answer": 195,
        "examples": [{'input': {'x1': 15}, 'output': 195}],
        });
    fs.writeFileSync('json2/1081.json', json);
}
doit();
