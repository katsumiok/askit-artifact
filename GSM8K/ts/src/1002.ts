import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1002.json')) {
        console.log("Skipping 1002")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Lisa and Peter are selling chocolate bars door to door. Lisa sold three and a half boxes of chocolate bars, and Peter sold four and a half boxes. They sold {{x1}} chocolate bars together. How many chocolate bars are in a box?', [], [{'input': {'x1': 64}, 'output': 8}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 64});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 8;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1002,
        "question": 'Lisa and Peter are selling chocolate bars door to door. Lisa sold three and a half boxes of chocolate bars, and Peter sold four and a half boxes. They sold 64 chocolate bars together. How many chocolate bars are in a box?',
        "answer": 8,
        "examples": [{'input': {'x1': 64}, 'output': 8}],
        });
    fs.writeFileSync('json/1002.json', json);
}
doit();
