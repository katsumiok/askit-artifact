import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/334.json')) {
        console.log("Skipping 334")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Nick, Richard, Jason and DJ each have paintball guns. DJ has {{x1}} guns, Nick has {{x2}} guns, RJ has {{x3}} gun and Richard has {{x4}} guns. If they were to share their guns equally, how many guns would each of them have?', [], [{'input': {'x1': 8, 'x2': 10, 'x3': 1, 'x4': 5}, 'output': 6}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 8, 'x2': 10, 'x3': 1, 'x4': 5});
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
        "id": 334,
        "question": 'Nick, Richard, Jason and DJ each have paintball guns. DJ has 8 guns, Nick has 10 guns, RJ has 1 gun and Richard has 5 guns. If they were to share their guns equally, how many guns would each of them have?',
        "answer": 6,
        "examples": [{'input': {'x1': 8, 'x2': 10, 'x3': 1, 'x4': 5}, 'output': 6}],
        });
    fs.writeFileSync('json/334.json', json);
}
doit();
