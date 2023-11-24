import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/743.json')) {
        console.log("Skipping 743")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Mara added {{x1}} slices of cake to a plate that already had {{x2}} slices on it. She was getting hungrier so she tripled the number of slices she currently has. She ate {{x3}} slices and while she was distracted, her friend stole {{x4}} slices off her plate. What number of cake slices remained on the plate?', [], [{'input': {'x1': 3, 'x2': 2, 'x3': 2, 'x4': 5}, 'output': 8}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3, 'x2': 2, 'x3': 2, 'x4': 5});
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
        "id": 743,
        "question": 'Mara added 3 slices of cake to a plate that already had 2 slices on it. She was getting hungrier so she tripled the number of slices she currently has. She ate 2 slices and while she was distracted, her friend stole 5 slices off her plate. What number of cake slices remained on the plate?',
        "answer": 8,
        "examples": [{'input': {'x1': 3, 'x2': 2, 'x3': 2, 'x4': 5}, 'output': 8}],
        });
    fs.writeFileSync('json2/743.json', json);
}
doit();
