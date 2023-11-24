import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/198.json')) {
        console.log("Skipping 198")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number}>('Elaine initially had {{x1}} Pokemon cards. After a month, she collected three times that number. In the second month, she collected {{x2}} fewer cards than those she collected in the first month. In the third month, she collected twice the combined number of pokemon cards she collected in the first and second months. How many pokemon cards does she have now in total?', [], [{'input': {'x1': 20, 'x2': 20}, 'output': 320}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 20, 'x2': 20});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 320;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 198,
        "question": 'Elaine initially had 20 Pokemon cards. After a month, she collected three times that number. In the second month, she collected 20 fewer cards than those she collected in the first month. In the third month, she collected twice the combined number of pokemon cards she collected in the first and second months. How many pokemon cards does she have now in total?',
        "answer": 320,
        "examples": [{'input': {'x1': 20, 'x2': 20}, 'output': 320}],
        });
    fs.writeFileSync('json2/198.json', json);
}
doit();
