import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1301.json')) {
        console.log("Skipping 1301")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number, x6: number, x7: number}>('Randy has {{x1}} oatmeal cookies, {{x2}} chocolate chip cookies, and {{x3}} sugar cookies. He ate {{x4}} cookies for an early day snack, one of each flavor. He ate {{x5}} oatmeal cookies for lunch. He gives {{x6}} sugar cookies to his friends. Then, he bakes {{x7}} of each flavor for dinner. How many cookies does he have now?', [], [{'input': {'x1': 9, 'x2': 4, 'x3': 5, 'x4': 3, 'x5': 2, 'x6': 2, 'x7': 4}, 'output': 23}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 9, 'x2': 4, 'x3': 5, 'x4': 3, 'x5': 2, 'x6': 2, 'x7': 4});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 23;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1301,
        "question": 'Randy has 9 oatmeal cookies, 4 chocolate chip cookies, and 5 sugar cookies. He ate 3 cookies for an early day snack, one of each flavor. He ate 2 oatmeal cookies for lunch. He gives 2 sugar cookies to his friends. Then, he bakes 4 of each flavor for dinner. How many cookies does he have now?',
        "answer": 23,
        "examples": [{'input': {'x1': 9, 'x2': 4, 'x3': 5, 'x4': 3, 'x5': 2, 'x6': 2, 'x7': 4}, 'output': 23}],
        });
    fs.writeFileSync('json/1301.json', json);
}
doit();
