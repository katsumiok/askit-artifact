import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/201.json')) {
        console.log("Skipping 201")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('John wins an award at work.  The award has a {{x1}} time monetary reward of $5000 and a 5% raise in salary.  If he makes {{x2}} a week, every week of the year and he got the award on the first day of the year how much money did he make that year?', [], [{'input': {'x1': 1, 'x2': 2000}, 'output': 114200}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 1, 'x2': 2000});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 114200;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 201,
        "question": 'John wins an award at work.  The award has a 1 time monetary reward of $5000 and a 5% raise in salary.  If he makes 2000 a week, every week of the year and he got the award on the first day of the year how much money did he make that year?',
        "answer": 114200,
        "examples": [{'input': {'x1': 1, 'x2': 2000}, 'output': 114200}],
        });
    fs.writeFileSync('json2/201.json', json);
}
doit();
