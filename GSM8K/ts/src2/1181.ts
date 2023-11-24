import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1181.json')) {
        console.log("Skipping 1181")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Wendy is five times as old as Colin will be seven years from now. In {{x1}} years, Colin will be a third as old as Wendy is now. How old is Colin now?', [], [{'input': {'x1': 25}, 'output': 20}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 25});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 20;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1181,
        "question": 'Wendy is five times as old as Colin will be seven years from now. In 25 years, Colin will be a third as old as Wendy is now. How old is Colin now?',
        "answer": 20,
        "examples": [{'input': {'x1': 25}, 'output': 20}],
        });
    fs.writeFileSync('json2/1181.json', json);
}
doit();
