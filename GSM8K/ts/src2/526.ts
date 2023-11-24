import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/526.json')) {
        console.log("Skipping 526")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>("Ada's daily electric consumption is {{x1}} kilowatts per hour. She is planning to add a device that will consume {{x2}} kilowatts per hour a day. If a kilowatt per hour is $1.50, how much is the difference between Ada's weekly electric bill before and after she adds the new device?", [], [{'input': {'x1': 12, 'x2': 2}, 'output': 21}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 12, 'x2': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 21;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 526,
        "question": "Ada's daily electric consumption is 12 kilowatts per hour. She is planning to add a device that will consume 2 kilowatts per hour a day. If a kilowatt per hour is $1.50, how much is the difference between Ada's weekly electric bill before and after she adds the new device?",
        "answer": 21,
        "examples": [{'input': {'x1': 12, 'x2': 2}, 'output': 21}],
        });
    fs.writeFileSync('json2/526.json', json);
}
doit();
