import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1011.json')) {
        console.log("Skipping 1011")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>("A tank has a capacity of {{x1}} gallons. Wanda and Ms. B decided to pump water from a pond to fill the tank in two days. On the first day, working in shifts, Wanda filled 1/4 of the tank's capacity with water, and Ms. B pumped 3/4 as much water as Wanda pumped into the tank that day. On the second day, Wanda pumped 2/3 of the amount of water she pumped on the previous day, while Ms. B only pumped 1/3 of the number of gallons she pumped on the first day. How many gallons of water are remaining for the tank to be full?", [], [{'input': {'x1': 18000}, 'output': 6000}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 18000});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 6000;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1011,
        "question": "A tank has a capacity of 18000 gallons. Wanda and Ms. B decided to pump water from a pond to fill the tank in two days. On the first day, working in shifts, Wanda filled 1/4 of the tank's capacity with water, and Ms. B pumped 3/4 as much water as Wanda pumped into the tank that day. On the second day, Wanda pumped 2/3 of the amount of water she pumped on the previous day, while Ms. B only pumped 1/3 of the number of gallons she pumped on the first day. How many gallons of water are remaining for the tank to be full?",
        "answer": 6000,
        "examples": [{'input': {'x1': 18000}, 'output': 6000}],
        });
    fs.writeFileSync('json2/1011.json', json);
}
doit();
