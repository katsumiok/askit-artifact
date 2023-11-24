import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/761.json')) {
        console.log("Skipping 761")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>("Two thirds of Jana's puppies are Pomeranians. One third of the Pomeranians are girls. If there are {{x1}} Pomeranian girls, how many puppies does Jana have?", [], [{'input': {'x1': 6}, 'output': 27}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 6});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 27;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 761,
        "question": "Two thirds of Jana's puppies are Pomeranians. One third of the Pomeranians are girls. If there are 6 Pomeranian girls, how many puppies does Jana have?",
        "answer": 27,
        "examples": [{'input': {'x1': 6}, 'output': 27}],
        });
    fs.writeFileSync('json2/761.json', json);
}
doit();
