import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/1004.json')) {
        console.log("Skipping 1004")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Peter has {{x1}} boxes with the same number of chocolate bars in each, while Martha has {{x2}} boxes with the same number of chocolate bars in each. If Peter and Martha have totals of {{x3}} and {{x4}} chocolate bars respectively, how many more chocolate bars does Peter have in each box than Martha?', [], [{'input': {'x1': 4, 'x2': 7, 'x3': 64, 'x4': 56}, 'output': 8}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4, 'x2': 7, 'x3': 64, 'x4': 56});
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
        "id": 1004,
        "question": 'Peter has 4 boxes with the same number of chocolate bars in each, while Martha has 7 boxes with the same number of chocolate bars in each. If Peter and Martha have totals of 64 and 56 chocolate bars respectively, how many more chocolate bars does Peter have in each box than Martha?',
        "answer": 8,
        "examples": [{'input': {'x1': 4, 'x2': 7, 'x3': 64, 'x4': 56}, 'output': 8}],
        });
    fs.writeFileSync('json2/1004.json', json);
}
doit();
