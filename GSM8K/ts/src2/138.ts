import { define, getErrors, getReason, getCompletion } from 'ts-askit'
import * as t from 'ts-askit/types'
import * as fs from 'fs'
async function doit() {
    if (fs.existsSync('json2/138.json')) {
        console.log("Skipping 138")
        return;
    }
    // measure time
    const f = define<number, {x1: number, x2: number, x3: number, x4: number, x5: number}>('Mark took a test yesterday that consisted of {{x1}} questions. He completed the test at a rate of {{x2}} questions per hour. Today, he took another test of {{x3}} questions at the same rate. If Mark had {{x4}} hours to complete the first test and {{x5}} hours to complete the second one, how many questions did he leave incomplete?', [], [{'input': {'x1': 75, 'x2': 5, 'x3': 100, 'x4': 8, 'x5': 6}, 'output': 105}]);
    const start = process.hrtime.bigint();
    let result = null;
    try {
        result = await f({'x1': 75, 'x2': 5, 'x3': 100, 'x4': 8, 'x5': 6});
    } catch (e) {
        result = null;        
    }
    const end = process.hrtime.bigint();
    const time = Number(end - start);
    const ok = result === 105;
    console.log(ok, getReason());
    const json = JSON.stringify({
        "llm_time": time,
        "errors": f.errors,
        "completion": getCompletion().data,
        "reason": getReason(),
        "result": ok ? "Success" : "Failed",
        "id": 138,
        "question": 'Mark took a test yesterday that consisted of 75 questions. He completed the test at a rate of 5 questions per hour. Today, he took another test of 100 questions at the same rate. If Mark had 8 hours to complete the first test and 6 hours to complete the second one, how many questions did he leave incomplete?',
        "answer": 105,
        "examples": [{'input': {'x1': 75, 'x2': 5, 'x3': 100, 'x4': 8, 'x5': 6}, 'output': 105}],
        });
    fs.writeFileSync('json2/138.json', json);
}
doit();
