import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/409.json')) {
        console.log("Skipping 409")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>("Carolyn works for a delivery service company that hires on a contract basis. In May, they hired {{x1}} employees, paying each employee $15 per hour for a 40-hour workweek. In June, 1/4 of the employees' contracts expired. Calculate the total amount of money the company paid to the employees in the two months.", [], [{'input': {'x1': 40}, 'output': 168000}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 40});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 168000;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 409,
        "question": "Carolyn works for a delivery service company that hires on a contract basis. In May, they hired 40 employees, paying each employee $15 per hour for a 40-hour workweek. In June, 1/4 of the employees' contracts expired. Calculate the total amount of money the company paid to the employees in the two months.",
        "answer": 168000,
        "examples": [{'input': {'x1': 40}, 'output': 168000}],
        });
    fs.writeFileSync('json/409.json', json);
}
doit();
