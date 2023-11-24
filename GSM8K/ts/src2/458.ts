import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/458.json')) {
        console.log("Skipping 458")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>("Jennifer's dog has {{x1}} puppies, {{x2}} of which have spots. Brandon's dog has {{x3}} puppies, {{x4}} of which have spots. What percentage of all the puppies have spots?", [], [{'input': {'x1': 8, 'x2': 3, 'x3': 12, 'x4': 4}, 'output': 35}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 8, 'x2': 3, 'x3': 12, 'x4': 4});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 35;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 458,
        "question": "Jennifer's dog has 8 puppies, 3 of which have spots. Brandon's dog has 12 puppies, 4 of which have spots. What percentage of all the puppies have spots?",
        "answer": 35,
        "examples": [{'input': {'x1': 8, 'x2': 3, 'x3': 12, 'x4': 4}, 'output': 35}],
        });
    fs.writeFileSync('json2/458.json', json);
}
doit();
