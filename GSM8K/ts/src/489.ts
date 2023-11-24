import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/489.json')) {
        console.log("Skipping 489")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('The highest temperature ever recorded in Southlandia is -48 degrees Fahrenheit. The highest temperature ever recorded in Northlandia is {{x1}} degrees Fahrenheit. The highest temperature recorded in Midlandia is -3 degrees Fahrenheit. What is the average highest temperature of these {{x2}} countries?', [], [{'input': {'x1': 21, 'x2': 3}, 'output': -10}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 21, 'x2': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === -10;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 489,
        "question": 'The highest temperature ever recorded in Southlandia is -48 degrees Fahrenheit. The highest temperature ever recorded in Northlandia is 21 degrees Fahrenheit. The highest temperature recorded in Midlandia is -3 degrees Fahrenheit. What is the average highest temperature of these 3 countries?',
        "answer": -10,
        "examples": [{'input': {'x1': 21, 'x2': 3}, 'output': -10}],
        });
    fs.writeFileSync('json/489.json', json);
}
doit();
