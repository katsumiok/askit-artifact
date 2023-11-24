import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1116.json')) {
        console.log("Skipping 1116")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Last year there were {{x1}} students enrolled in a calligraphy class. This year, there was a 20% increase in enrollment. How many students are enrolled this year in the calligraphy class?', [], [{'input': {'x1': 50}, 'output': 60}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 50});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 60;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1116,
        "question": 'Last year there were 50 students enrolled in a calligraphy class. This year, there was a 20% increase in enrollment. How many students are enrolled this year in the calligraphy class?',
        "answer": 60,
        "examples": [{'input': {'x1': 50}, 'output': 60}],
        });
    fs.writeFileSync('json2/1116.json', json);
}
doit();
