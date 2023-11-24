import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1318.json')) {
        console.log("Skipping 1318")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Henry and {{x1}} of his friends order {{x2}} pizzas for lunch. Each pizza is cut into {{x3}} slices. If Henry and his friends want to share the pizzas equally, how many slices can each of them have?', [], [{'input': {'x1': 3, 'x2': 7, 'x3': 8}, 'output': 14}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3, 'x2': 7, 'x3': 8});
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
        "id": 1318,
        "question": 'Henry and 3 of his friends order 7 pizzas for lunch. Each pizza is cut into 8 slices. If Henry and his friends want to share the pizzas equally, how many slices can each of them have?',
        "answer": 14,
        "examples": [{'input': {'x1': 3, 'x2': 7, 'x3': 8}, 'output': 14}],
        });
    fs.writeFileSync('json/1318.json', json);
}
doit();
