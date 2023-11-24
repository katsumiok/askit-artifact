import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/647.json')) {
        console.log("Skipping 647")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>('Bill is trying to dig a well in his backyard. He can dig {{x1}} feet/hour through soil and half that fast through clay. If he has to dig through {{x2}} feet of soil and {{x3}} feet of clay, how long will it take him to dig the well?', [], [{'input': {'x1': 4, 'x2': 24, 'x3': 8}, 'output': 10}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4, 'x2': 24, 'x3': 8});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 10;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 647,
        "question": 'Bill is trying to dig a well in his backyard. He can dig 4 feet/hour through soil and half that fast through clay. If he has to dig through 24 feet of soil and 8 feet of clay, how long will it take him to dig the well?',
        "answer": 10,
        "examples": [{'input': {'x1': 4, 'x2': 24, 'x3': 8}, 'output': 10}],
        });
    fs.writeFileSync('json2/647.json', json);
}
doit();
