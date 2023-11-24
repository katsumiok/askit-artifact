import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/204.json')) {
        console.log("Skipping 204")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number, x6: number}>('Janet had {{x1}} green pens and {{x2}} yellow pens. Then she bought {{x3}} bags of blue pens and {{x4}} bags of red pens. There were {{x5}} pens in each bag of blue and {{x6}} pens in each bag of red. How many pens does Janet have now?', [], [{'input': {'x1': 22, 'x2': 10, 'x3': 6, 'x4': 2, 'x5': 9, 'x6': 6}, 'output': 98}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 22, 'x2': 10, 'x3': 6, 'x4': 2, 'x5': 9, 'x6': 6});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 98;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 204,
        "question": 'Janet had 22 green pens and 10 yellow pens. Then she bought 6 bags of blue pens and 2 bags of red pens. There were 9 pens in each bag of blue and 6 pens in each bag of red. How many pens does Janet have now?',
        "answer": 98,
        "examples": [{'input': {'x1': 22, 'x2': 10, 'x3': 6, 'x4': 2, 'x5': 9, 'x6': 6}, 'output': 98}],
        });
    fs.writeFileSync('json2/204.json', json);
}
doit();
