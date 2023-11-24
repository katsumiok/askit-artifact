import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/146.json')) {
        console.log("Skipping 146")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>("Johnny is picking up the toys on the floor of his room.  He'd dumped a lego boxed set with {{x1}} pieces on the floor, and another one that had {{x2}} times more pieces than the {{x3}} piece one, and another one that had 1/4 the number of pieces.  How many blocks does Johnny pick up if he picks up all the legos?", [], [{'input': {'x1': 500, 'x2': 3, 'x3': 500}, 'output': 2125}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 500, 'x2': 3, 'x3': 500});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 2125;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 146,
        "question": "Johnny is picking up the toys on the floor of his room.  He'd dumped a lego boxed set with 500 pieces on the floor, and another one that had 3 times more pieces than the 500 piece one, and another one that had 1/4 the number of pieces.  How many blocks does Johnny pick up if he picks up all the legos?",
        "answer": 2125,
        "examples": [{'input': {'x1': 500, 'x2': 3, 'x3': 500}, 'output': 2125}],
        });
    fs.writeFileSync('json2/146.json', json);
}
doit();
