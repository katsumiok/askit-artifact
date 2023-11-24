import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1046.json')) {
        console.log("Skipping 1046")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('A team of {{x1}} painters worked on a mansion for 3/8ths of a day every day for {{x2}} weeks. How many hours of work did each painter put in?', [], [{'input': {'x1': 4, 'x2': 3}, 'output': 189}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4, 'x2': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 189;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1046,
        "question": 'A team of 4 painters worked on a mansion for 3/8ths of a day every day for 3 weeks. How many hours of work did each painter put in?',
        "answer": 189,
        "examples": [{'input': {'x1': 4, 'x2': 3}, 'output': 189}],
        });
    fs.writeFileSync('json2/1046.json', json);
}
doit();
