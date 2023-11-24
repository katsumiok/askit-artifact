import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/890.json')) {
        console.log("Skipping 890")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>("There are {{x1}} plants in Mrs. Smith's garden. One-fourth of her plants are indoor plants. Two-thirds of the remaining are outdoor plants while the rest are flowering plants. What percent of the plants are flowering plants?", [], [{'input': {'x1': 100}, 'output': 25}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 100});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 25;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 890,
        "question": "There are 100 plants in Mrs. Smith's garden. One-fourth of her plants are indoor plants. Two-thirds of the remaining are outdoor plants while the rest are flowering plants. What percent of the plants are flowering plants?",
        "answer": 25,
        "examples": [{'input': {'x1': 100}, 'output': 25}],
        });
    fs.writeFileSync('json2/890.json', json);
}
doit();
