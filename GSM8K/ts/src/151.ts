import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/151.json')) {
        console.log("Skipping 151")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Shawnda decides that her neighborhood kids could really use a bike inflation service. She decides the best way to charge is by the tire. Each tire costs {{x1}} cents to inflate. On the first day, {{x2}} people on bicycles came by to get both tires inflated. {{x3}} people came by to get all their tricycle tires inflated. Finally, one person actually came by on a unicycle. How many dollars did she make that day?', [], [{'input': {'x1': 25, 'x2': 5, 'x3': 3}, 'output': 5}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 25, 'x2': 5, 'x3': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 5;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 151,
        "question": 'Shawnda decides that her neighborhood kids could really use a bike inflation service. She decides the best way to charge is by the tire. Each tire costs 25 cents to inflate. On the first day, 5 people on bicycles came by to get both tires inflated. 3 people came by to get all their tricycle tires inflated. Finally, one person actually came by on a unicycle. How many dollars did she make that day?',
        "answer": 5,
        "examples": [{'input': {'x1': 25, 'x2': 5, 'x3': 3}, 'output': 5}],
        });
    fs.writeFileSync('json/151.json', json);
}
doit();
