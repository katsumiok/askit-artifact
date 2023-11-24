import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/594.json')) {
        console.log("Skipping 594")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('A cup of mushrooms weighs {{x1}} grams and has {{x2}} grams of protein.  If John eats {{x3}} grams of mushrooms every day how many grams of protein does he get per week?', [], [{'input': {'x1': 100, 'x2': 3, 'x3': 200}, 'output': 42}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 100, 'x2': 3, 'x3': 200});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 42;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 594,
        "question": 'A cup of mushrooms weighs 100 grams and has 3 grams of protein.  If John eats 200 grams of mushrooms every day how many grams of protein does he get per week?',
        "answer": 42,
        "examples": [{'input': {'x1': 100, 'x2': 3, 'x3': 200}, 'output': 42}],
        });
    fs.writeFileSync('json2/594.json', json);
}
doit();
