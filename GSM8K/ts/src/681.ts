import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/681.json')) {
        console.log("Skipping 681")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Katarina has {{x1}} less cookies than Max has. Max has {{x2}} more cookies than the Cookie Monster, and Summer has {{x3}} more cookies than Max. If Katarina has {{x4}} cookies, how many cookies do they have in total?', [], [{'input': {'x1': 5, 'x2': 12, 'x3': 23, 'x4': 68}, 'output': 298}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 5, 'x2': 12, 'x3': 23, 'x4': 68});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 298;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 681,
        "question": 'Katarina has 5 less cookies than Max has. Max has 12 more cookies than the Cookie Monster, and Summer has 23 more cookies than Max. If Katarina has 68 cookies, how many cookies do they have in total?',
        "answer": 298,
        "examples": [{'input': {'x1': 5, 'x2': 12, 'x3': 23, 'x4': 68}, 'output': 298}],
        });
    fs.writeFileSync('json/681.json', json);
}
doit();
