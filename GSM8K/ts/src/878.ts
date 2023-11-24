import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/878.json')) {
        console.log("Skipping 878")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Julie, Micah, and Mitchell sold {{x1}} glasses of lemonade at their lemonade stand. Julie sold {{x2}} glasses and the boys sold an equal number of glasses. How many more glasses did Julie sell than Micah?', [], [{'input': {'x1': 32, 'x2': 14}, 'output': 5}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 32, 'x2': 14});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 5;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 878,
        "question": 'Julie, Micah, and Mitchell sold 32 glasses of lemonade at their lemonade stand. Julie sold 14 glasses and the boys sold an equal number of glasses. How many more glasses did Julie sell than Micah?',
        "answer": 5,
        "examples": [{'input': {'x1': 32, 'x2': 14}, 'output': 5}],
        });
    fs.writeFileSync('json/878.json', json);
}
doit();
