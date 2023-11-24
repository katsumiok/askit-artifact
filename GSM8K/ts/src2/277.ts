import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/277.json')) {
        console.log("Skipping 277")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('It takes Matthew {{x1}} minutes to dig a small hole for shrubs and {{x2}} minutes to dig a large hole for trees.  How many hours will it take him to dig {{x3}} small holes and {{x4}} large holes?', [], [{'input': {'x1': 3, 'x2': 10, 'x3': 30, 'x4': 15}, 'output': 4}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3, 'x2': 10, 'x3': 30, 'x4': 15});
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
        "id": 277,
        "question": 'It takes Matthew 3 minutes to dig a small hole for shrubs and 10 minutes to dig a large hole for trees.  How many hours will it take him to dig 30 small holes and 15 large holes?',
        "answer": 4,
        "examples": [{'input': {'x1': 3, 'x2': 10, 'x3': 30, 'x4': 15}, 'output': 4}],
        });
    fs.writeFileSync('json2/277.json', json);
}
doit();
