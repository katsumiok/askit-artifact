import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json/1044.json')) {
        console.log("Skipping 1044")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number}>('On the first day of school, Ava sees that her friends Cole and Xavier have both grown a lot over the summer. Xavier was {{x1}} feet tall and grew {{x2}} inches. Cole was {{x3}} inches tall and grew {{x4}} inches over the summer. What is the difference between Cole and Xavier’s height now?', [], [{'input': {'x1': 4, 'x2': 3, 'x3': 50, 'x4': 2}, 'output': 1}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 4, 'x2': 3, 'x3': 50, 'x4': 2});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 1;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 1044,
        "question": 'On the first day of school, Ava sees that her friends Cole and Xavier have both grown a lot over the summer. Xavier was 4 feet tall and grew 3 inches. Cole was 50 inches tall and grew 2 inches over the summer. What is the difference between Cole and Xavier’s height now?',
        "answer": 1,
        "examples": [{'input': {'x1': 4, 'x2': 3, 'x3': 50, 'x4': 2}, 'output': 1}],
        });
    fs.writeFileSync('json/1044.json', json);
}
doit();
