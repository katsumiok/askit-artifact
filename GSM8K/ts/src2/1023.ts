import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1023.json')) {
        console.log("Skipping 1023")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('A man eats {{x1}} sandwiches per day, his wife eats {{x2}} sandwiches per day, and their son eats {{x3}} sandwiches per day. How many sandwiches does this family eat in one week?', [], [{'input': {'x1': 5, 'x2': 4, 'x3': 2}, 'output': 77}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5, 'x2': 4, 'x3': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 77;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1023,
        "question": 'A man eats 5 sandwiches per day, his wife eats 4 sandwiches per day, and their son eats 2 sandwiches per day. How many sandwiches does this family eat in one week?',
        "answer": 77,
        "examples": [{'input': {'x1': 5, 'x2': 4, 'x3': 2}, 'output': 77}],
        });
    fs.writeFileSync('json2/1023.json', json);
}
doit();
