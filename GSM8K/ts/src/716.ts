import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/716.json')) {
        console.log("Skipping 716")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number}>('John makes himself a {{x1}} egg omelet with {{x2}} oz of cheese and an equal amount of ham.  Eggs are {{x3}} calories each.  Cheese is {{x4}} calories per ounce.  Ham is {{x5}} calories per ounce.  How many calories is the omelet?', [], [{'input': {'x1': 6, 'x2': 2, 'x3': 75, 'x4': 120, 'x5': 40}, 'output': 770}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 6, 'x2': 2, 'x3': 75, 'x4': 120, 'x5': 40});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 770;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 716,
        "question": 'John makes himself a 6 egg omelet with 2 oz of cheese and an equal amount of ham.  Eggs are 75 calories each.  Cheese is 120 calories per ounce.  Ham is 40 calories per ounce.  How many calories is the omelet?',
        "answer": 770,
        "examples": [{'input': {'x1': 6, 'x2': 2, 'x3': 75, 'x4': 120, 'x5': 40}, 'output': 770}],
        });
    fs.writeFileSync('json/716.json', json);
}
doit();
