import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1160.json')) {
        console.log("Skipping 1160")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Last week the IRS received {{x1}} tax reports. On Monday and Tuesday they received a total of {{x2}} reports. On Thursday and Friday they received a total of {{x3}} reports. How many reports did they receive on Wednesday?', [], [{'input': {'x1': 5168, 'x2': 1907, 'x3': 2136}, 'output': 1125}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5168, 'x2': 1907, 'x3': 2136});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 1125;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1160,
        "question": 'Last week the IRS received 5168 tax reports. On Monday and Tuesday they received a total of 1907 reports. On Thursday and Friday they received a total of 2136 reports. How many reports did they receive on Wednesday?',
        "answer": 1125,
        "examples": [{'input': {'x1': 5168, 'x2': 1907, 'x3': 2136}, 'output': 1125}],
        });
    fs.writeFileSync('json/1160.json', json);
}
doit();
