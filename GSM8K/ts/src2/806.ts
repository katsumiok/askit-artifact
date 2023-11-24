import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/806.json')) {
        console.log("Skipping 806")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number}>("Janet is collecting the results of Herbert Hoover Elementary School's annual standardized test. {{x1}} out of {{x2}} third-graders passed, along with {{x3}} out of {{x4}} fourth graders. The {{x5}} fifth graders had a pass rate that was twice the fourth grades' pass rate. What is the school's overall pass rate?", [], [{'input': {'x1': 340, 'x2': 500, 'x3': 40, 'x4': 100, 'x5': 400}, 'output': 70}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 340, 'x2': 500, 'x3': 40, 'x4': 100, 'x5': 400});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 70;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 806,
        "question": "Janet is collecting the results of Herbert Hoover Elementary School's annual standardized test. 340 out of 500 third-graders passed, along with 40 out of 100 fourth graders. The 400 fifth graders had a pass rate that was twice the fourth grades' pass rate. What is the school's overall pass rate?",
        "answer": 70,
        "examples": [{'input': {'x1': 340, 'x2': 500, 'x3': 40, 'x4': 100, 'x5': 400}, 'output': 70}],
        });
    fs.writeFileSync('json2/806.json', json);
}
doit();
