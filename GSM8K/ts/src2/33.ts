import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/33.json')) {
        console.log("Skipping 33")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Gretchen has {{x1}} coins. There are {{x2}} more gold coins than silver coins. How many gold coins does Gretchen have?', [], [{'input': {'x1': 110, 'x2': 30}, 'output': 70}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 110, 'x2': 30});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 70;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 33,
        "question": 'Gretchen has 110 coins. There are 30 more gold coins than silver coins. How many gold coins does Gretchen have?',
        "answer": 70,
        "examples": [{'input': {'x1': 110, 'x2': 30}, 'output': 70}],
        });
    fs.writeFileSync('json2/33.json', json);
}
doit();
