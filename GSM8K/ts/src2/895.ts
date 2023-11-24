import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/895.json')) {
        console.log("Skipping 895")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>("Martin's weight is {{x1}} kg. Carl’s weight is {{x2}} kg more than Martin’s weight. Christian’s weight is {{x3}} kg more than Carl’s weight. Harry is {{x4}} kg less than Christian’s weight. What is the weight of Harry, in kg?", [], [{'input': {'x1': 55, 'x2': 16, 'x3': 8, 'x4': 5}, 'output': 74}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 55, 'x2': 16, 'x3': 8, 'x4': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 74;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 895,
        "question": "Martin's weight is 55 kg. Carl’s weight is 16 kg more than Martin’s weight. Christian’s weight is 8 kg more than Carl’s weight. Harry is 5 kg less than Christian’s weight. What is the weight of Harry, in kg?",
        "answer": 74,
        "examples": [{'input': {'x1': 55, 'x2': 16, 'x3': 8, 'x4': 5}, 'output': 74}],
        });
    fs.writeFileSync('json2/895.json', json);
}
doit();
