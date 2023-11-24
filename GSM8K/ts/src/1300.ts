import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1300.json')) {
        console.log("Skipping 1300")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Josh runs a car shop and services {{x1}} cars a day.  He is open every day of the week except Sunday and Wednesday.  He gets paid $4 per car.  How much does he make in {{x2}} weeks?', [], [{'input': {'x1': 3, 'x2': 2}, 'output': 120}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3, 'x2': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 120;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1300,
        "question": 'Josh runs a car shop and services 3 cars a day.  He is open every day of the week except Sunday and Wednesday.  He gets paid $4 per car.  How much does he make in 2 weeks?',
        "answer": 120,
        "examples": [{'input': {'x1': 3, 'x2': 2}, 'output': 120}],
        });
    fs.writeFileSync('json/1300.json', json);
}
doit();
