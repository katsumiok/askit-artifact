import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1226.json')) {
        console.log("Skipping 1226")
        return;
    }
    // measure time
    const f = define<number, {}>('A basic manicure starts at $35 while a pedicure starts at $40. A certain salon offers 20% off if you get both. Suppose Karen chooses to do both and would also like to add nail art on each of her fingers, which costs $3 per nail. How much would she pay in all?', [], [{'input': {}, 'output': 90}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 90;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1226,
        "question": 'A basic manicure starts at $35 while a pedicure starts at $40. A certain salon offers 20% off if you get both. Suppose Karen chooses to do both and would also like to add nail art on each of her fingers, which costs $3 per nail. How much would she pay in all?',
        "answer": 90,
        "examples": [{'input': {}, 'output': 90}],
        });
    fs.writeFileSync('json2/1226.json', json);
}
doit();
