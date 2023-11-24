import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1066.json')) {
        console.log("Skipping 1066")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('The glee club ordered {{x1}} pizzas and ate 70% of them. The football team ordered twice as many pizzas and ate 80% of them. How many pizzas are left?', [], [{'input': {'x1': 20}, 'output': 14}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 20});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 14;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1066,
        "question": 'The glee club ordered 20 pizzas and ate 70% of them. The football team ordered twice as many pizzas and ate 80% of them. How many pizzas are left?',
        "answer": 14,
        "examples": [{'input': {'x1': 20}, 'output': 14}],
        });
    fs.writeFileSync('json/1066.json', json);
}
doit();
