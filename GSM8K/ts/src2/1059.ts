import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1059.json')) {
        console.log("Skipping 1059")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Imma has {{x1}} cats. She feeds her cats twice a day with {{x2}} grams of cat food. How many days will {{x3}} grams of cat food last?', [], [{'input': {'x1': 3, 'x2': 60, 'x3': 720}, 'output': 2}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3, 'x2': 60, 'x3': 720});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 2;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1059,
        "question": 'Imma has 3 cats. She feeds her cats twice a day with 60 grams of cat food. How many days will 720 grams of cat food last?',
        "answer": 2,
        "examples": [{'input': {'x1': 3, 'x2': 60, 'x3': 720}, 'output': 2}],
        });
    fs.writeFileSync('json2/1059.json', json);
}
doit();
