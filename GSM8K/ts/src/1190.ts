import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1190.json')) {
        console.log("Skipping 1190")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('A nurses’ station orders bandages in bulk packs of 50. On the first day, the nurses used {{x1}} bandages and ordered one bulk pack of bandages. On the second day, they used ten fewer bandages. On the third day, they ordered two bulk packs of bandages and only used half a pack. They had {{x2}} bandages left at the end of the third day. How many bandages did they start with on the first day?', [], [{'input': {'x1': 38, 'x2': 78}, 'output': 19}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 38, 'x2': 78});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 19;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1190,
        "question": 'A nurses’ station orders bandages in bulk packs of 50. On the first day, the nurses used 38 bandages and ordered one bulk pack of bandages. On the second day, they used ten fewer bandages. On the third day, they ordered two bulk packs of bandages and only used half a pack. They had 78 bandages left at the end of the third day. How many bandages did they start with on the first day?',
        "answer": 19,
        "examples": [{'input': {'x1': 38, 'x2': 78}, 'output': 19}],
        });
    fs.writeFileSync('json/1190.json', json);
}
doit();
