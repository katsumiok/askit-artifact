import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/178.json')) {
        console.log("Skipping 178")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Rani has ten more crabs than Monic, who has {{x1}} fewer crabs than Bo. If Bo has {{x2}} crabs, calculate the total number of crabs the three have together.', [], [{'input': {'x1': 4, 'x2': 40}, 'output': 122}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4, 'x2': 40});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 122;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 178,
        "question": 'Rani has ten more crabs than Monic, who has 4 fewer crabs than Bo. If Bo has 40 crabs, calculate the total number of crabs the three have together.',
        "answer": 122,
        "examples": [{'input': {'x1': 4, 'x2': 40}, 'output': 122}],
        });
    fs.writeFileSync('json/178.json', json);
}
doit();
