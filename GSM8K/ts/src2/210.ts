import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/210.json')) {
        console.log("Skipping 210")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>("Sara wants to buy herself a new jacket and {{x1}} pairs of shoes. The jacket she wants costs $30 and each pair of shoes cost $20. Sara babysits the neighbor's kids {{x2}} times, earning $5 each time she babysits them. Her parents pay her $4 each time she mows the lawn. If Sara already had $10 saved before she started babysitting, how many times must she mow the lawn before she can afford the jacket and shoes?", [], [{'input': {'x1': 2, 'x2': 4}, 'output': 10}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2, 'x2': 4});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 10;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 210,
        "question": "Sara wants to buy herself a new jacket and 2 pairs of shoes. The jacket she wants costs $30 and each pair of shoes cost $20. Sara babysits the neighbor's kids 4 times, earning $5 each time she babysits them. Her parents pay her $4 each time she mows the lawn. If Sara already had $10 saved before she started babysitting, how many times must she mow the lawn before she can afford the jacket and shoes?",
        "answer": 10,
        "examples": [{'input': {'x1': 2, 'x2': 4}, 'output': 10}],
        });
    fs.writeFileSync('json2/210.json', json);
}
doit();
