import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1299.json')) {
        console.log("Skipping 1299")
        return;
    }
    // measure time
    const f = define<number, {}>('Janet goes to the mall and spends $3.50 on ice cream, $7.50 each for movie tickets for herself and her younger sister, and $8.50 on a bracelet. If her parents gave her $40, how many dollars does she have left?', [], [{'input': {}, 'output': 13}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 13;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1299,
        "question": 'Janet goes to the mall and spends $3.50 on ice cream, $7.50 each for movie tickets for herself and her younger sister, and $8.50 on a bracelet. If her parents gave her $40, how many dollars does she have left?',
        "answer": 13,
        "examples": [{'input': {}, 'output': 13}],
        });
    fs.writeFileSync('json/1299.json', json);
}
doit();
