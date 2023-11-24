import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/537.json')) {
        console.log("Skipping 537")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Four books are arranged on a shelf. The first book is {{x1}} mm thick while the second book is {{x2}} mm thick. The third book is {{x3}} mm less thick than the second book, and the fourth book is twice as thick as the first book. What is the total thickness of the four books?', [], [{'input': {'x1': 31, 'x2': 50, 'x3': 5}, 'output': 188}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 31, 'x2': 50, 'x3': 5});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 188;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 537,
        "question": 'Four books are arranged on a shelf. The first book is 31 mm thick while the second book is 50 mm thick. The third book is 5 mm less thick than the second book, and the fourth book is twice as thick as the first book. What is the total thickness of the four books?',
        "answer": 188,
        "examples": [{'input': {'x1': 31, 'x2': 50, 'x3': 5}, 'output': 188}],
        });
    fs.writeFileSync('json/537.json', json);
}
doit();
