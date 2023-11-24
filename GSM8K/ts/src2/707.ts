import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/707.json')) {
        console.log("Skipping 707")
        return;
    }
    // measure time
    const f = define<number, {}>("Colorado City uses 40% of the water from the Colorado River. If 80% of that water is used for industrial purposes, what percent of the river's total water is used by the city for non-industrial purposes?", [], [{'input': {}, 'output': 8}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 8;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 707,
        "question": "Colorado City uses 40% of the water from the Colorado River. If 80% of that water is used for industrial purposes, what percent of the river's total water is used by the city for non-industrial purposes?",
        "answer": 8,
        "examples": [{'input': {}, 'output': 8}],
        });
    fs.writeFileSync('json2/707.json', json);
}
doit();
