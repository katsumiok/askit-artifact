import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1036.json')) {
        console.log("Skipping 1036")
        return;
    }
    // measure time
    const f = define<number, {}>('There are forty apples in one box. Uncle Franky ordered two boxes of apples. He is planning to pack the apples with eight apples in one pack. How many packs of apples can he make with the two boxes of apples?', [], [{'input': {}, 'output': 10}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({});
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
        "id": 1036,
        "question": 'There are forty apples in one box. Uncle Franky ordered two boxes of apples. He is planning to pack the apples with eight apples in one pack. How many packs of apples can he make with the two boxes of apples?',
        "answer": 10,
        "examples": [{'input': {}, 'output': 10}],
        });
    fs.writeFileSync('json/1036.json', json);
}
doit();
