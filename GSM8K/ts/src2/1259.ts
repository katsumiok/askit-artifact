import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1259.json')) {
        console.log("Skipping 1259")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Derrick has a bakery that makes {{x1}} dozen doughnuts every day, selling at $2 per doughnut. How much money does Derrick make in June if he sells all the doughnuts?', [], [{'input': {'x1': 10}, 'output': 7200}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 10});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 7200;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1259,
        "question": 'Derrick has a bakery that makes 10 dozen doughnuts every day, selling at $2 per doughnut. How much money does Derrick make in June if he sells all the doughnuts?',
        "answer": 7200,
        "examples": [{'input': {'x1': 10}, 'output': 7200}],
        });
    fs.writeFileSync('json2/1259.json', json);
}
doit();
