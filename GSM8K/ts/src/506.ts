import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/506.json')) {
        console.log("Skipping 506")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>('Mario needs to buy snowshoes for his {{x1}} sled dogs.  Assuming his dogs each has four legs and each pair of snowshoes costs $12.00, how much will it cost him to buy snowshoes for all of his dogs?', [], [{'input': {'x1': 6}, 'output': 144}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 6});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 144;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 506,
        "question": 'Mario needs to buy snowshoes for his 6 sled dogs.  Assuming his dogs each has four legs and each pair of snowshoes costs $12.00, how much will it cost him to buy snowshoes for all of his dogs?',
        "answer": 144,
        "examples": [{'input': {'x1': 6}, 'output': 144}],
        });
    fs.writeFileSync('json/506.json', json);
}
doit();
