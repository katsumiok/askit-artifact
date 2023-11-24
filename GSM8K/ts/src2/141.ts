import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/141.json')) {
        console.log("Skipping 141")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('There are {{x1}} bees in a hive. There are twice as many worker bees as baby bees, and there are twice as many babies as queens.  How many worker bees are there?', [], [{'input': {'x1': 700}, 'output': 400}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 700});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 400;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 141,
        "question": 'There are 700 bees in a hive. There are twice as many worker bees as baby bees, and there are twice as many babies as queens.  How many worker bees are there?',
        "answer": 400,
        "examples": [{'input': {'x1': 700}, 'output': 400}],
        });
    fs.writeFileSync('json2/141.json', json);
}
doit();
