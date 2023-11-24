import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1074.json')) {
        console.log("Skipping 1074")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Teddy finished half of a {{x1}} piece puzzle, and then started and finished another {{x2}} piece puzzle within an hour.  How many puzzle pieces did Teddy place during that hour?', [], [{'input': {'x1': 500, 'x2': 500}, 'output': 750}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 500, 'x2': 500});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 750;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1074,
        "question": 'Teddy finished half of a 500 piece puzzle, and then started and finished another 500 piece puzzle within an hour.  How many puzzle pieces did Teddy place during that hour?',
        "answer": 750,
        "examples": [{'input': {'x1': 500, 'x2': 500}, 'output': 750}],
        });
    fs.writeFileSync('json2/1074.json', json);
}
doit();
