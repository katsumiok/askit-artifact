import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/734.json')) {
        console.log("Skipping 734")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number}>("Cindy's math and science books weigh {{x1}} pounds each.  Her French book weighs {{x2}} pounds and her English book weighs {{x3}} pounds.  Her history book weighs twice as much as her English book.  If Cindy carries all of her books at once, what will be the total weight of the books she is carrying?", [], [{'input': {'x1': 2, 'x2': 4, 'x3': 3}, 'output': 17}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 2, 'x2': 4, 'x3': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 17;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 734,
        "question": "Cindy's math and science books weigh 2 pounds each.  Her French book weighs 4 pounds and her English book weighs 3 pounds.  Her history book weighs twice as much as her English book.  If Cindy carries all of her books at once, what will be the total weight of the books she is carrying?",
        "answer": 17,
        "examples": [{'input': {'x1': 2, 'x2': 4, 'x3': 3}, 'output': 17}],
        });
    fs.writeFileSync('json2/734.json', json);
}
doit();
