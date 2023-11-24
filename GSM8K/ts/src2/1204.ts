import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1204.json')) {
        console.log("Skipping 1204")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Twenty tourists discovered {{x1}} shells in a strip mall parking lot. They had divided into three groups, Alphas, The finders, and Gogetters to find as many shells as possible. If team Alphas found 40% of the shells, and team The finders found 60% of the remaining shells, how many shells did team Gogetters find?', [], [{'input': {'x1': 700}, 'output': 168}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 700});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 168;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1204,
        "question": 'Twenty tourists discovered 700 shells in a strip mall parking lot. They had divided into three groups, Alphas, The finders, and Gogetters to find as many shells as possible. If team Alphas found 40% of the shells, and team The finders found 60% of the remaining shells, how many shells did team Gogetters find?',
        "answer": 168,
        "examples": [{'input': {'x1': 700}, 'output': 168}],
        });
    fs.writeFileSync('json2/1204.json', json);
}
doit();
