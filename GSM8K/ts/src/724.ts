import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/724.json')) {
        console.log("Skipping 724")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Bryce and four of his friends each ordered their own pizzas after football practice. Each pizza had {{x1}} slices. Bryce and two friends ate 2/3 of their pizzas. The two remaining friends ate ¾ of their pizzas. How many slices of pizza were left?', [], [{'input': {'x1': 12}, 'output': 18}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 12});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 18;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 724,
        "question": 'Bryce and four of his friends each ordered their own pizzas after football practice. Each pizza had 12 slices. Bryce and two friends ate 2/3 of their pizzas. The two remaining friends ate ¾ of their pizzas. How many slices of pizza were left?',
        "answer": 18,
        "examples": [{'input': {'x1': 12}, 'output': 18}],
        });
    fs.writeFileSync('json/724.json', json);
}
doit();
