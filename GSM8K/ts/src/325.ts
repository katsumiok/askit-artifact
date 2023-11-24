import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/325.json')) {
        console.log("Skipping 325")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Jaime is a computer programmer for a company that currently has employed {{x1}} people. Senior programmers are paid $400 more than junior programmers. If the number of Junior programmers is 2/5 of the total number of employees, and they are each paid $2000 per month, calculate the total amount of money the company pays to all the programmers per month.', [], [{'input': {'x1': 100}, 'output': 224000}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 100});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 224000;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 325,
        "question": 'Jaime is a computer programmer for a company that currently has employed 100 people. Senior programmers are paid $400 more than junior programmers. If the number of Junior programmers is 2/5 of the total number of employees, and they are each paid $2000 per month, calculate the total amount of money the company pays to all the programmers per month.',
        "answer": 224000,
        "examples": [{'input': {'x1': 100}, 'output': 224000}],
        });
    fs.writeFileSync('json/325.json', json);
}
doit();
