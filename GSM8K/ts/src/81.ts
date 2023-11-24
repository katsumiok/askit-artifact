import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/81.json')) {
        console.log("Skipping 81")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number}>('Charlie had {{x1}} stickers. He bought {{x2}} stickers from a store in the mall and got {{x3}} stickers for his birthday. Then Charlie gave {{x4}} of the stickers to his sister and used {{x5}} to decorate a greeting card. How many stickers does Charlie have left?', [], [{'input': {'x1': 10, 'x2': 21, 'x3': 23, 'x4': 9, 'x5': 28}, 'output': 17}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 10, 'x2': 21, 'x3': 23, 'x4': 9, 'x5': 28});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 17;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 81,
        "question": 'Charlie had 10 stickers. He bought 21 stickers from a store in the mall and got 23 stickers for his birthday. Then Charlie gave 9 of the stickers to his sister and used 28 to decorate a greeting card. How many stickers does Charlie have left?',
        "answer": 17,
        "examples": [{'input': {'x1': 10, 'x2': 21, 'x3': 23, 'x4': 9, 'x5': 28}, 'output': 17}],
        });
    fs.writeFileSync('json/81.json', json);
}
doit();
