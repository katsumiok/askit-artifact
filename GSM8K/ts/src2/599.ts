import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/599.json')) {
        console.log("Skipping 599")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('A pet store currently has {{x1}} dogs, {{x2}} cats, and {{x3}} birds. How many legs in total do the pets in the store have?', [], [{'input': {'x1': 5, 'x2': 2, 'x3': 10}, 'output': 48}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5, 'x2': 2, 'x3': 10});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 48;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 599,
        "question": 'A pet store currently has 5 dogs, 2 cats, and 10 birds. How many legs in total do the pets in the store have?',
        "answer": 48,
        "examples": [{'input': {'x1': 5, 'x2': 2, 'x3': 10}, 'output': 48}],
        });
    fs.writeFileSync('json2/599.json', json);
}
doit();
