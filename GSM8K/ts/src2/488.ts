import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/488.json')) {
        console.log("Skipping 488")
        return;
    }
    // measure time
    const f = define<number, {x1: number}>("Jana has {{x1}} puppies. Two thirds of Jana's puppies are Pomeranians. One third of the Pomeranians are girls. How many girl Pomeranians does Jana have?", [], [{'input': {'x1': 27}, 'output': 6}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 27});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 6;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 488,
        "question": "Jana has 27 puppies. Two thirds of Jana's puppies are Pomeranians. One third of the Pomeranians are girls. How many girl Pomeranians does Jana have?",
        "answer": 6,
        "examples": [{'input': {'x1': 27}, 'output': 6}],
        });
    fs.writeFileSync('json2/488.json', json);
}
doit();
