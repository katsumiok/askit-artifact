import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/784.json')) {
        console.log("Skipping 784")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>("Andy's car fuel efficiency is {{x1}} MPG (miles per gallon). If the current price for regular gas is $3/gallon, how much money is Andy's car consuming per week if he only uses his car to go to work from Monday to Friday and the one-way distance between his home and office is {{x2}} miles?", [], [{'input': {'x1': 10, 'x2': 5}, 'output': 15}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 10, 'x2': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 15;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 784,
        "question": "Andy's car fuel efficiency is 10 MPG (miles per gallon). If the current price for regular gas is $3/gallon, how much money is Andy's car consuming per week if he only uses his car to go to work from Monday to Friday and the one-way distance between his home and office is 5 miles?",
        "answer": 15,
        "examples": [{'input': {'x1': 10, 'x2': 5}, 'output': 15}],
        });
    fs.writeFileSync('json2/784.json', json);
}
doit();
