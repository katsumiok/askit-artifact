import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/794.json')) {
        console.log("Skipping 794")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('A zookeeper is counting how many lions are in their enclosure. She counts {{x1}} female lions, half as many male lions, and {{x2}} lion cubs. How many lions are in the enclosure?', [], [{'input': {'x1': 12, 'x2': 14}, 'output': 32}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 12, 'x2': 14});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 32;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 794,
        "question": 'A zookeeper is counting how many lions are in their enclosure. She counts 12 female lions, half as many male lions, and 14 lion cubs. How many lions are in the enclosure?',
        "answer": 32,
        "examples": [{'input': {'x1': 12, 'x2': 14}, 'output': 32}],
        });
    fs.writeFileSync('json2/794.json', json);
}
doit();
