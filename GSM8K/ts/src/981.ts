import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/981.json')) {
        console.log("Skipping 981")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>("On Thursday, Joe caught {{x1}} pounds of crawfish.  He caught {{x2}} times that amount on Friday and half the amount of his Friday's catch on Saturday.  If {{x3}} serving of crawfish is {{x4}} pounds, how many servings does he have?", [], [{'input': {'x1': 3, 'x2': 4, 'x3': 1, 'x4': 3}, 'output': 7}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 3, 'x2': 4, 'x3': 1, 'x4': 3});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 7;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 981,
        "question": "On Thursday, Joe caught 3 pounds of crawfish.  He caught 4 times that amount on Friday and half the amount of his Friday's catch on Saturday.  If 1 serving of crawfish is 3 pounds, how many servings does he have?",
        "answer": 7,
        "examples": [{'input': {'x1': 3, 'x2': 4, 'x3': 1, 'x4': 3}, 'output': 7}],
        });
    fs.writeFileSync('json/981.json', json);
}
doit();
