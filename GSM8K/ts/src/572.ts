import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/572.json')) {
        console.log("Skipping 572")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Ford owns a garden and he grows {{x1}} roses every week. He supplies Roses to the local flower shops. The first flower shop orders {{x2}} roses, the second flower shop orders {{x3}} roses, and the third flower shop orders {{x4}} roses per week. How many roses does Ford lack to supply all the flower shops every month?', [], [{'input': {'x1': 40, 'x2': 20, 'x3': 15, 'x4': 30}, 'output': 100}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 40, 'x2': 20, 'x3': 15, 'x4': 30});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 100;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 572,
        "question": 'Ford owns a garden and he grows 40 roses every week. He supplies Roses to the local flower shops. The first flower shop orders 20 roses, the second flower shop orders 15 roses, and the third flower shop orders 30 roses per week. How many roses does Ford lack to supply all the flower shops every month?',
        "answer": 100,
        "examples": [{'input': {'x1': 40, 'x2': 20, 'x3': 15, 'x4': 30}, 'output': 100}],
        });
    fs.writeFileSync('json/572.json', json);
}
doit();
