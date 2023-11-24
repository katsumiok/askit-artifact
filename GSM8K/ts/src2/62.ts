import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/62.json')) {
        console.log("Skipping 62")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('If Marcy works for the same company for {{x1}} years, she gets an annual pension of $50,000/year. Starting after {{x2}} years, she becomes entitled to 5% of the value of the pension per year. If she quits after {{x3}} years, what will her annual pension be?', [], [{'input': {'x1': 40, 'x2': 20, 'x3': 30}, 'output': 25000}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 40, 'x2': 20, 'x3': 30});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 25000;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 62,
        "question": 'If Marcy works for the same company for 40 years, she gets an annual pension of $50,000/year. Starting after 20 years, she becomes entitled to 5% of the value of the pension per year. If she quits after 30 years, what will her annual pension be?',
        "answer": 25000,
        "examples": [{'input': {'x1': 40, 'x2': 20, 'x3': 30}, 'output': 25000}],
        });
    fs.writeFileSync('json2/62.json', json);
}
doit();
