import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/976.json')) {
        console.log("Skipping 976")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('Sunny is selling gingerbread and apple pie for a fundraiser. On Saturday, he sold {{x1}} boxes of gingerbread and {{x2}} fewer boxes of apple pie, than on Sunday. On Sunday, he sold {{x3}} more boxes of gingerbread than on Saturday and {{x4}} boxes of apple pie. If the gingerbread cost $6 and the apple pie cost $15, how much did Sunny earn for two days?', [], [{'input': {'x1': 10, 'x2': 4, 'x3': 5, 'x4': 15}, 'output': 540}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 10, 'x2': 4, 'x3': 5, 'x4': 15});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 540;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 976,
        "question": 'Sunny is selling gingerbread and apple pie for a fundraiser. On Saturday, he sold 10 boxes of gingerbread and 4 fewer boxes of apple pie, than on Sunday. On Sunday, he sold 5 more boxes of gingerbread than on Saturday and 15 boxes of apple pie. If the gingerbread cost $6 and the apple pie cost $15, how much did Sunny earn for two days?',
        "answer": 540,
        "examples": [{'input': {'x1': 10, 'x2': 4, 'x3': 5, 'x4': 15}, 'output': 540}],
        });
    fs.writeFileSync('json2/976.json', json);
}
doit();
