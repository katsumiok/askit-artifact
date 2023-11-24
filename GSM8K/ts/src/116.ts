import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/116.json')) {
        console.log("Skipping 116")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Katy makes coffee using teaspoons of sugar and cups of water in the ratio of 7:13. If she used a total of {{x1}} teaspoons of sugar and cups of water, calculate the number of teaspoonfuls of sugar she used.', [], [{'input': {'x1': 120}, 'output': 42}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 120});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 42;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 116,
        "question": 'Katy makes coffee using teaspoons of sugar and cups of water in the ratio of 7:13. If she used a total of 120 teaspoons of sugar and cups of water, calculate the number of teaspoonfuls of sugar she used.',
        "answer": 42,
        "examples": [{'input': {'x1': 120}, 'output': 42}],
        });
    fs.writeFileSync('json/116.json', json);
}
doit();
