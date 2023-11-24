import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/313.json')) {
        console.log("Skipping 313")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Six years ago, when Noah was half as old as Cera, the population of Chile was half what it is now. Currently, Cera is {{x1}} years old. If the population of Chile six years ago was {{x2}} times the age of Noah, calculate the population of Chile now.', [], [{'input': {'x1': 46, 'x2': 3000}, 'output': 120000}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 46, 'x2': 3000});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 120000;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 313,
        "question": 'Six years ago, when Noah was half as old as Cera, the population of Chile was half what it is now. Currently, Cera is 46 years old. If the population of Chile six years ago was 3000 times the age of Noah, calculate the population of Chile now.',
        "answer": 120000,
        "examples": [{'input': {'x1': 46, 'x2': 3000}, 'output': 120000}],
        });
    fs.writeFileSync('json2/313.json', json);
}
doit();
