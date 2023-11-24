import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1175.json')) {
        console.log("Skipping 1175")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>("In the first half of a soccer match, team A scores {{x1}} goals while team B scores {{x2}} goals fewer than team A. In the second half, team A scores 1/4 of the number of goals scored by team B, which scores {{x3}} times the number of goals it scored in the first half. What's the total number of goals scored in the match?", [], [{'input': {'x1': 4, 'x2': 2, 'x3': 4}, 'output': 16}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4, 'x2': 2, 'x3': 4});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 16;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1175,
        "question": "In the first half of a soccer match, team A scores 4 goals while team B scores 2 goals fewer than team A. In the second half, team A scores 1/4 of the number of goals scored by team B, which scores 4 times the number of goals it scored in the first half. What's the total number of goals scored in the match?",
        "answer": 16,
        "examples": [{'input': {'x1': 4, 'x2': 2, 'x3': 4}, 'output': 16}],
        });
    fs.writeFileSync('json2/1175.json', json);
}
doit();
