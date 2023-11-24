import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/415.json')) {
        console.log("Skipping 415")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>("While Joanne is gathering apples from her family’s orchard, her sister comes outside to help her. Joanne gathers {{x1}} apples from the tallest trees, half this amount from the shortest trees, and more apples from the average trees. Compared with Joanne, her sister gathers twice as many apples from the tallest trees and {{x2}} times as many apples from the shortest trees. She doesn't take any from the average trees. If the sisters have gathered a combined total of {{x3}} apples, how many apples did Joanne gather from the average trees?", [], [{'input': {'x1': 30, 'x2': 3, 'x3': 500}, 'output': 350}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 30, 'x2': 3, 'x3': 500});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 350;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 415,
        "question": "While Joanne is gathering apples from her family’s orchard, her sister comes outside to help her. Joanne gathers 30 apples from the tallest trees, half this amount from the shortest trees, and more apples from the average trees. Compared with Joanne, her sister gathers twice as many apples from the tallest trees and 3 times as many apples from the shortest trees. She doesn't take any from the average trees. If the sisters have gathered a combined total of 500 apples, how many apples did Joanne gather from the average trees?",
        "answer": 350,
        "examples": [{'input': {'x1': 30, 'x2': 3, 'x3': 500}, 'output': 350}],
        });
    fs.writeFileSync('json/415.json', json);
}
doit();
