import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/848.json')) {
        console.log("Skipping 848")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('A clothing store has {{x1}} white shirts and {{x2}} floral shirts. Half of the white shirts have collars, and {{x3}} of the floral shirts have buttons. How many more floral shirts with no buttons are there than white shirts with no collars?', [], [{'input': {'x1': 40, 'x2': 50, 'x3': 20}, 'output': 10}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 40, 'x2': 50, 'x3': 20});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 10;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 848,
        "question": 'A clothing store has 40 white shirts and 50 floral shirts. Half of the white shirts have collars, and 20 of the floral shirts have buttons. How many more floral shirts with no buttons are there than white shirts with no collars?',
        "answer": 10,
        "examples": [{'input': {'x1': 40, 'x2': 50, 'x3': 20}, 'output': 10}],
        });
    fs.writeFileSync('json/848.json', json);
}
doit();
