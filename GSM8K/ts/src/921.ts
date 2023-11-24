import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/921.json')) {
        console.log("Skipping 921")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('A loaf of bread has {{x1}} slices. If Abby can eat {{x2}} slices a day while Josh can eat twice as much, how many days will the loaf of bread last?', [], [{'input': {'x1': 24, 'x2': 2}, 'output': 4}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 24, 'x2': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 4;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 921,
        "question": 'A loaf of bread has 24 slices. If Abby can eat 2 slices a day while Josh can eat twice as much, how many days will the loaf of bread last?',
        "answer": 4,
        "examples": [{'input': {'x1': 24, 'x2': 2}, 'output': 4}],
        });
    fs.writeFileSync('json/921.json', json);
}
doit();
